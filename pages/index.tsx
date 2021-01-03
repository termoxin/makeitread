/** @jsxRuntime classic */
/** @jsx jsx  */

import Link from "next/link";
import { Badge, Box, Heading, jsx, Message } from "theme-ui";
import { FC, useMemo } from "react";
import { useSession } from "next-auth/client";
import { NextPageContext } from "next";

import { CardProps } from "@components/card/Card";
import { fetchReadList } from "src/api/readlist";
import { PageProps } from "./_app";
import { CalendarHeatmap, ChartShallowDataShape } from "reaviz";
import { getDayOfYear } from "src/helpers/client/date";

interface ExpandedCard extends CardProps {
  createdAt: Date;
  updatedAt: Date;
  markedAt: Date;
}
interface HomeProps extends PageProps {
  list: ExpandedCard[];
}

const Home: FC<HomeProps> = ({ list }) => {
  const [session] = useSession();

  const heatmapData = useMemo(
    () =>
      Object.values(
        list
          .filter((article) => article.markedAt)
          .map((article) => new Date(article.markedAt))
          .reduce(
            (acc: Record<number, ChartShallowDataShape>, currentValue) => {
              const date = new Date(currentValue);
              const dayOfYear = getDayOfYear(date);
              const day = acc[dayOfYear];

              return {
                ...acc,
                [dayOfYear]: {
                  ...day,
                  key: day?.key ?? date,
                  data: day?.data ? +day.data + 1 : 1,
                },
              };
            },
            {}
          )
      ),
    []
  );

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
      {!!heatmapData.length && (
        <Box mt={20} ml={10}>
          <CalendarHeatmap
            sx={{ overflow: "visible" }}
            data={heatmapData}
            height={135}
            width={805}
          />
        </Box>
      )}
    </div>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const list = await fetchReadList(context);

  return { props: { list } };
};

export default Home;
