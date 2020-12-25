import { GetServerSidePropsContext } from "next";
import DefaultErrorPage from "next/error";
import { FC, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Box, Heading, Text, Link, jsx, Button, Message } from "theme-ui";
import { useRouter } from "next/router";

import { CardProps } from "@components/card/Card";
import { transform } from "src/helpers/transform";
import {
  getArticle,
  removeArticlFromList,
  setMarkAsRead,
} from "src/api/article";
import { getArticleNotes } from "src/api/note";
import { Notes } from "@components/notes";
import { PageProps } from "pages/_app";

export interface NoteProps {
  _id: string;
  text: string;
  url: string;
}

interface ArticleProps extends CardProps, PageProps {
  error?: boolean;
  notes: NoteProps[];
  email: string;
}

const Article: FC<ArticleProps> = ({
  title,
  source,
  ttr,
  original,
  text,
  error,
  marked,
  slug,
  _id,
  notes,
  email,
  session,
}) => {
  const { push } = useRouter();
  const [isMarkedAsRead, setMarkedAsRead] = useState(marked);

  if (error) {
    return <DefaultErrorPage statusCode={404} />;
  }

  const toggleMarkAsRead = async () => {
    const response = await setMarkAsRead(_id, !isMarkedAsRead);

    setMarkedAsRead(!response.marked);
  };

  const deleteArticle = async () => {
    const shouldDelete = confirm(
      "Are you sure you want to delete the article?"
    );

    if (shouldDelete) {
      await removeArticlFromList(slug);
      push("/readlist");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        pl: 250,
        pr: 250,
        pt: 120,
        pb: 50,
      }}
    >
      <Heading sx={{ variant: "styles.h1" }}>{title}</Heading>
      <Box mt={10} mb={10}>
        <Text sx={{ variant: "styles.p", color: "muted" }}>
          {source} • {ttr} min
        </Text>
        <Link
          href={original}
          target="__blank"
          sx={{ variant: "styles.a", textDecoration: "none" }}
        >
          View original
        </Link>
        <div>{ReactHtmlParser(text, { transform })}</div>
      </Box>
      {session?.user.email === email && (
        <>
          <Notes notes={notes} />
          <Button
            onClick={toggleMarkAsRead}
            variant={isMarkedAsRead ? "primary" : "secondary"}
          >
            {isMarkedAsRead ? "Mark as unread" : "Mark as read"}
          </Button>
          <Button mt={10} onClick={deleteArticle}>
            Delete
          </Button>
        </>
      )}
    </Box>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{ slug: string }>) => {
  const article = await getArticle(params?.slug as string);
  const notes = await getArticleNotes(article.original);

  return { props: { ...article, notes } };
};

export default Article;
