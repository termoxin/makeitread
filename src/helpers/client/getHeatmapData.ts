import { compose, filter, map, not, prop, reduce, values } from "ramda";

import { ExpandedCard } from "./../../../pages/index";
import { CalendarDatum } from "@nivo/calendar";

import { getDayOfYear, getFormattedDate } from "./date";

const filterWithoutMarkedAt = filter<ExpandedCard>(
  compose(not, not, prop("markedAt"))
);

const mapMarkedAtDates = map<ExpandedCard, Date>(
  (article) => new Date(article.markedAt)
);

const reduceByMarkedAt = reduce(
  (acc: Record<number, CalendarDatum>, currentValue: Date) => {
    const date = new Date(currentValue);
    const dayOfYear = getDayOfYear(date);
    const day = acc[dayOfYear];

    return {
      ...acc,
      [dayOfYear]: {
        ...day,
        day: !day?.day ? getFormattedDate(date) : day.day,
        value: day?.value ? +day.value + 1 : 1,
      },
    };
  },
  {}
);

export const getHeatmapData = compose<
  ExpandedCard[],
  ExpandedCard[],
  Date[],
  Record<number, CalendarDatum>,
  CalendarDatum[]
>(values, reduceByMarkedAt, mapMarkedAtDates, filterWithoutMarkedAt);
