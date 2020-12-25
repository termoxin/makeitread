import { FC, useEffect, useState } from "react";
import { Box, Button, Grid, Heading, Spinner } from "theme-ui";

import { Card, CardProps } from "@components/card/Card";
import { fetchReadList } from "src/api/readlist";
import { NextPageContext } from "next";
import { PageProps } from "pages/_app";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

interface ListProps extends PageProps {
  list: CardProps[];
}

interface Button {
  name: string;
  text: string;
}

const buttons: Button[] = [
  {
    name: "all",
    text: "All",
  },
  {
    name: "read",
    text: "Read",
  },
  {
    name: "unread",
    text: "Unread",
  },
];

const List: FC<ListProps> = ({ list }) => {
  const [session, loading] = useSession();
  const { push } = useRouter();

  const [currentList, setList] = useState(list);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (!loading && !session) {
      setList([]);
      push("/");
    }
  }, [session, loading]);

  const getButtonVariant = (name: string) =>
    name === filter ? "primary" : "alternative";

  const createFilter = (name: string) => () => setFilter(name);

  const filterList = ({ marked }: CardProps) => {
    if (marked && filter === "read") return true;
    if (!marked && filter === "unread") return true;
    if (filter === "all") return true;

    return false;
  };

  return (
    <Box>
      {!loading && session ? (
        <>
          <Heading mt={80} sx={{ variant: "styles.h1" }}>
            My List
          </Heading>
          <Box mt={20} mb={20}>
            {buttons.map(({ text, name }) => (
              <Button
                mr={10}
                variant={getButtonVariant(name)}
                onClick={createFilter(name)}
                key={name}
              >
                {text}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid columns={[1, 2, 3, 4]} gap={4} mt={20}>
              {currentList.filter(filterList).map((item) => (
                <Card {...item} key={item.slug} />
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <Spinner />
      )}
    </Box>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const list = await fetchReadList(context);

  return { props: { list } };
};

export default List;
