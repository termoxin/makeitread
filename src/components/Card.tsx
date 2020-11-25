import React, { FC } from "react";
import { Box, Card as CardContainer, Heading, Image, Text } from "theme-ui";

interface CardProps {
  title: string;
  source: string;
  ttr: number;
  description: string;
  cover: string;
}

export const Card: FC<CardProps> = ({
  title,
  source,
  ttr,
  description,
  cover,
}) => {
  return (
    <CardContainer sx={{ variant: "containers.card" }}>
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
    </CardContainer>
  );
};
