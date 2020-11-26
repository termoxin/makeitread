import Link from "next/link";
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
  slug: string;
}

export const Card: FC<CardProps> = ({
  title,
  source,
  ttr,
  description,
  cover,
  marked,
  slug,
}) => (
  <CardContainer sx={{ variant: "containers.card" }} className={styles.card}>
    <Image src={cover} />
    <Box p={3}>
      <Box>
        <Link href="/readlist/[id]" as={`/readlist/${slug}`}>
          <Heading
            sx={{ variant: "styles.h4", fontWeight: "body", cursor: "pointer" }}
          >
            {title}
          </Heading>
        </Link>
        <Text sx={{ variant: "styles.p", color: "muted" }}>
          {source} • {ttr} min
        </Text>
      </Box>
      <Box mt={3}>
        <Text sx={{ fontSize: 14 }}>{description}</Text>
      </Box>
    </Box>
    {marked && <Bookmark />}
  </CardContainer>
);
