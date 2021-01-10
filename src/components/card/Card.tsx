/** @jsxRuntime classic */
/** @jsx jsx  */

import { FC } from "react";
import {
  AspectImage,
  Box,
  Card as CardContainer,
  Heading,
  Text,
  jsx,
  Link,
} from "theme-ui";
import imageNotFound from "./imageNotFound.png";

import { Bookmark } from "./Bookmark";

import styles from "./styles.module.scss";

export interface CardProps {
  _id: string;
  title: string;
  source: string;
  ttr: number;
  description: string;
  cover: string;
  marked?: boolean;
  slug: string;
  text: string;
  original: string;
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
  <CardContainer
    sx={{ variant: "containers.card", opacity: marked ? 0.4 : 1 }}
    className={styles.card}
  >
    <AspectImage
      src={cover || imageNotFound}
      ratio={4 / 3}
      sx={{ width: 300, height: 200 }}
    />
    <Box p={3}>
      <Box>
        <Link
          href={`/readlist/${slug}`}
          target="_blank"
          sx={{
            variant: "styles.h4`",
            color: "text",
            textDecoration: "none",
          }}
        >
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
