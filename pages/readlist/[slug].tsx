/** @jsxRuntime classic */
/** @jsx jsx  */

import { Box, Heading, Text, Link, jsx } from "theme-ui";

const Article = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        pl: 250,
        pr: 250,
        pt: 120,
        pb: 50,
      }}
    >
      <Heading sx={{ variant: "styles.h1" }}>
        Расшифровки аббревиатур (IMHO, AFAIK, LOL и т.п.)
      </Heading>
      <Box mt={10} mb={10}>
        <Text sx={{ variant: "styles.p", color: "muted" }}>
          medium.com • 4 min
        </Text>
        <Link
          href="http://medium.com"
          target="__blank"
          sx={{ variant: "styles.a", textDecoration: "none" }}
        >
          View original
        </Link>
      </Box>
      <Text variant="styles.p">
        After publishing my previous article tracking React Libraries worth
        talking about, a few people asked me how I decide which library to use
        in my own projects.
      </Text>
      <Text variant="styles.p">
        Truth is, I don’t have a single hard and fast rule, but rather a feeling
        that comes from looking at {""}
        <span sx={{ variant: "styles.p", fontWeight: "bold" }}>
          how a library stacks up against a set of quick checks that. {""}
        </span>
        I’ve developed over the years of being burned by dodgy libraries.
      </Text>
      <Heading variant="styles.h2">Docs</Heading>
      <Text variant="styles.p">
        One of the first things I check before installing a library is the
        documentation
      </Text>
      <Text variant="styles.p">
        I’ve also been asked this several times over the years as an interview
        question for frontend developer roles. I’ve heard different answers
        every time I asked the question back to the interviewer - keep in mind
        that some teams care about different things, and you might have to
        decide for yourself.
      </Text>
      <Heading variant="styles.h2">Issues</Heading>
      <Text variant="styles.p">
        After publishing my previous article tracking React Libraries worth
        talking about, a few people asked me how I decide which library to use
        in my own projects.
      </Text>
      <Text variant="styles.p">
        Truth is, I don’t have a single hard and fast rule, but rather a feeling
        that comes from looking at how a library stacks up against a set of
        quick checks that I’ve developed over the years of being burned by dodgy
        libraries.
      </Text>
      <Text variant="styles.p">
        I’ve also been asked this several times over the years as an interview
        question for frontend developer roles. I’ve heard different answers
        every time I asked the question back to the interviewer - keep in mind
        that some teams care about different things, and you might have to
        decide for yourself.
      </Text>
      <Heading variant="styles.h2">Conclusion</Heading>
      <Text variant="styles.p">
        After publishing my previous article tracking React Libraries worth
        talking about, a few people asked me how I decide which library to use
        in my own projects.
      </Text>
    </Box>
  );
};

export default Article;
