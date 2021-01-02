import { useState } from "react";
import { Box, Theme, ThemeProvider } from "theme-ui";
import { getSession, Provider, Session } from "next-auth/client";
import type { AppProps } from "next/app";
import { NextPageContext } from "next";

import { Navigation } from "@components/nav/Nav";

import theme from "../theme";
import "../styles/styles.css";

export interface PageProps extends AppProps {
  session: Session;
}

interface Props extends PageProps {}

const App = ({ Component, pageProps, ...restProps }: Props) => {
  const [currentTheme, setCurrentTheme] = useState(theme.LIGHT_THEME);

  const toggleTheme = () => {
    if (currentTheme.name === "light") {
      setCurrentTheme(theme.DARK_THEME);
    } else {
      setCurrentTheme(theme.LIGHT_THEME);
    }
  };

  const props = { ...pageProps, ...restProps };

  return (
    <Provider session={restProps.session}>
      <Box pl={5} pr={5} pt={10} pb={5}>
        <Box mt={2}>
          <Navigation toggleTheme={toggleTheme} />
        </Box>
        <ThemeProvider theme={currentTheme as Theme}>
          <Component {...props} toggleTheme={toggleTheme} />
        </ThemeProvider>
      </Box>
    </Provider>
  );
};

App.getInitialProps = async (context: NextPageContext) => {
  const session = await getSession(context);

  return { session };
};

export default App;
