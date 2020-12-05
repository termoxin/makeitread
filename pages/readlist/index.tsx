/** @jsxRuntime classic */
/** @jsx jsx  */
import { FC } from "react";
import { Box, Grid, Heading, jsx } from "theme-ui";

import { Card, CardProps } from "@components/card/Card";
import { fetchReadList } from "src/api/readlist";

interface ListProps {
  list: CardProps[];
}

const List: FC<ListProps> = ({ list }) => (
  <Box>
    <Heading mt={80} sx={{ variant: "styles.h1" }}>
      My List
    </Heading>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid columns={[1, 2, 3, 4]} gap={4} mt={20}>
        {list.map((item) => (
          <Card {...item} key={item.slug} />
        ))}
      </Grid>
    </Box>
  </Box>
);

export const getServerSideProps = async () => {
  const list = await fetchReadList();

  return { props: { list } };
};

export default List;
