/** @jsxRuntime classic */
/** @jsx jsx  */
import { Box, Grid, Heading, jsx } from "theme-ui";

import { Card } from "../../src/components/card/Card";

const List = () => (
  <Box>
    <Heading mt={80} sx={{ variant: "styles.h1" }}>
      My List
    </Heading>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid columns={[1, 2, 3, 4]} gap={4} mt={20}>
        <Card
          title="Nature"
          source="medium.com"
          ttr={4}
          description={`There are tech skills and there are soft skills. Every programmer knows that. Tech skills are`}
          cover="https://media.nature.com/lw800/magazine-assets/d41586-020-01390-w/d41586-020-01390-w_17974388.jpg"
          marked
          slug="get-started"
        />
        <Card
          title="Nature"
          source="medium.com"
          ttr={4}
          description={`There are tech skills and there are soft skills. Every programmer knows that. Tech skills are`}
          cover="https://media.nature.com/lw800/magazine-assets/d41586-020-01390-w/d41586-020-01390-w_17974388.jpg"
          slug="introduction"
        />
        <Card
          title="Nature"
          source="medium.com"
          ttr={4}
          description={`There are tech skills and there are soft skills. Every programmer knows that. Tech skills are`}
          cover="https://media.nature.com/lw800/magazine-assets/d41586-020-01390-w/d41586-020-01390-w_17974388.jpg"
          slug="motivation"
        />
        <Card
          title="Nature"
          source="medium.com"
          ttr={4}
          description={`There are tech skills and there are soft skills. Every programmer knows that. Tech skills are`}
          cover="https://media.nature.com/lw800/magazine-assets/d41586-020-01390-w/d41586-020-01390-w_17974388.jpg"
          slug="api"
          marked
        />
        <Card
          title="Nature"
          source="medium.com"
          ttr={4}
          description={`There are tech skills and there are soft skills. Every programmer knows that. Tech skills are`}
          cover="https://media.nature.com/lw800/magazine-assets/d41586-020-01390-w/d41586-020-01390-w_17974388.jpg"
          slug="get-pieces-together"
        />
        <Card
          title="Nature"
          source="medium.com"
          ttr={4}
          description={`There are tech skills and there are soft skills. Every programmer knows that. Tech skills are`}
          cover="https://media.nature.com/lw800/magazine-assets/d41586-020-01390-w/d41586-020-01390-w_17974388.jpg"
          slug="summary"
          marked
        />
      </Grid>
    </Box>
  </Box>
);

export default List;
