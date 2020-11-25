import React, { FC } from "react";
import { Box, Card as CardContainer, Heading, Image, Text } from "theme-ui";

import { Bookmark } from "./Bookmark";

import styles from "./styles.module.scss";

interface CardProps {
  title: string;
  source: string;
  ttr: number;
  description: string;
  cover: string;
  marked?: boolean;
}

export const Card: FC<CardProps> = ({
  title,
  source,
  ttr,
  description,
  cover,
  marked,
}) => (
  <CardContainer sx={{ variant: "containers.card" }} className={styles.card}>
    <Image src={cover} />
    <Box p={3}>
      <Box>
        <Heading sx={{ variant: "styles.h4", fontWeight: "body" }}>
          {title}
        </Heading>
        <Text sx={{ variant: "styles.p", color: "muted" }}>
          {source} • {ttr} min
        </Text>
      </Box>
      <Box mt={3}>
        <Text sx={{ fontSize: 14 }}>{description}</Text>
      </Box>
    </Box>
    {marked && <Bookmark className={styles.bookmark} />}
  </CardContainer>
);
