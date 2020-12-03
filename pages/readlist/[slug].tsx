/** @jsxRuntime classic */
/** @jsx jsx  */

import { GetServerSidePropsContext } from "next";
import DefaultErrorPage from "next/error";
import { FC } from "react";
import ReactHtmlParser from "react-html-parser";
import { Box, Heading, Text, Link, jsx } from "theme-ui";

import { CardProps } from "../../src/components/card/Card";
import { transform } from "../../src/helpers/transform";

interface ArticleProps extends CardProps {
  text: string;
  original: string;
  error?: boolean;
}

const Article: FC<ArticleProps> = ({
  title,
  source,
  ttr,
  original,
  text,
  error,
}) => {
  if (error) {
    return <DefaultErrorPage statusCode={404} />;
  }

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
    </Box>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/readlist/${params?.slug}`
  );

  const { data } = await response.json();

  return { props: data };
};

export default Article;
