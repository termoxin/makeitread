/** @jsxRuntime classic */
/** @jsx jsx  */

import Link from "next/link";
import { Badge, Heading, jsx, Message } from "theme-ui";

import { CardProps } from "@components/card/Card";
import { fetchReadList } from "src/api/readlist";
import { PageProps } from "./_app";
import { FC } from "react";
import { useSession } from "next-auth/client";
import { NextPageContext } from "next";

interface HomeProps extends PageProps {
  list: CardProps[];
}

const Home: FC<HomeProps> = ({ list }) => {
  const [session] = useSession();

  return (
    <div>
      {session ? (
        <Heading variant="styles.h2">
          <Link href="/readlist">
            <a sx={{ variant: "styles.a", cursor: "pointer" }}>Read List</a>
          </Link>
          <Badge ml={1}>{list.length}</Badge>
        </Heading>
      ) : (
        <Message variant="primary" mt={50}>
          Please, sing in to see your reading list
        </Message>
      )}
    </div>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const list = await fetchReadList(context);

  return { props: { list } };
};

export default Home;
