/** @jsxRuntime classic */
/** @jsx jsx  */
import { FC, useState } from "react";
import { Box, Button, Grid, Heading, jsx } from "theme-ui";

import { Card, CardProps } from "@components/card/Card";
import { fetchReadList } from "src/api/readlist";

interface ListProps {
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
  const [filter, setFilter] = useState("all");

  const getButtonVariant = (name: string) => {
    if (name === filter) {
      return "primary";
    }

    return "alternative";
  };

  const createFilter = (name: string) => () => {
    setFilter(name);
  };

  const filterList = ({ marked }: CardProps) => {
    if (marked && filter === "read") return true;
    if (!marked && filter === "unread") return true;
    if (filter === "all") return true;

    return false;
  };

  return (
    <Box>
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
          alignItems: "center",
        }}
      >
        <Grid columns={[1, 2, 3, 4]} gap={4} mt={20}>
          {list.filter(filterList).map((item) => (
            <Card {...item} key={item.slug} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export const getServerSideProps = async () => {
  const list = await fetchReadList();

  return { props: { list } };
};

export default List;
