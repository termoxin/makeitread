/** @jsxRuntime classic */
/** @jsx jsx  */

import Link from "next/link";
import { Badge, Heading, jsx } from "theme-ui";
import { GetServerSidePropsContext } from "next";
import { CardProps } from "../src/components/card/Card";

interface HomeProps {
  list: CardProps[];
}

export default function Home({ list }: HomeProps) {
  return (
    <div>
      <Heading variant="styles.h2">
        <Link href="/readlist">
          <a sx={{ variant: "styles.a", cursor: "pointer" }}>Read List</a>
        </Link>
        <Badge ml={1}>{list.length}</Badge>
      </Heading>
    </div>
  );
}
export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/readlist`);
  const list = await response.json();

  return { props: { list } };
};
