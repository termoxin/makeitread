/** @jsxRuntime classic */
/** @jsx jsx  */

import Link from "next/link";
import { Badge, Heading, jsx } from "theme-ui";
import { GetServerSidePropsContext } from "next";

import { CardProps } from "@components/card/Card";
import { fetchReadList } from "src/api/readlist";

interface HomeProps {
  list: CardProps[];
}

const Home = ({ list }: HomeProps) => (
  <div>
    <Heading variant="styles.h2">
      <Link href="/readlist">
        <a sx={{ variant: "styles.a", cursor: "pointer" }}>Read List</a>
      </Link>
      <Badge ml={1}>{list.length}</Badge>
    </Heading>
  </div>
);

export const getServerSideProps = async () => {
  const list = await fetchReadList();

  return { props: { list } };
};

export default Home;
