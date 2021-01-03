/** @jsxRuntime classic */
/** @jsx jsx  */

import Link from "next/link";
import { Badge, Box, Heading, jsx, Message } from "theme-ui";
import { FC, useMemo } from "react";
import { useSession } from "next-auth/client";
import { NextPageContext } from "next";
import { ResponsiveCalendar } from "@nivo/calendar";

import { CardProps } from "@components/card/Card";
import { fetchReadList } from "src/api/readlist";
import { PageProps } from "./_app";
import { getDayOfYear, getFormattedDate } from "src/helpers/client/date";

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
          .reduce((acc: Record<number, any>, currentValue) => {
            const date = new Date(currentValue);
            const dayOfYear = getDayOfYear(date);
            const day = acc[dayOfYear];

            return {
              ...acc,
              [dayOfYear]: {
                ...day,
                day: !day?.day ? getFormattedDate(day?.day || date) : day.day,
                value: day?.value ? +day.value + 1 : 1,
              },
            };
          }, {})
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
      <Box mt={20} ml={10} sx={{ width: 700, height: 300 }}>
        <ResponsiveCalendar
          data={heatmapData}
          from="2021-01-01"
          to="2021-12-31"
          emptyColor="#eeeeee"
          colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left",
            },
          ]}
        />
      </Box>
    </div>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const list = await fetchReadList(context);

  return { props: { list } };
};

export default Home;
