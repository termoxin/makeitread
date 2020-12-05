import { useState } from "react";
import { Box, Theme, ThemeProvider } from "theme-ui";
import type { AppProps } from "next/app";

import { Navigation } from "@components/nav/Nav";

import theme from "../theme";
import "../styles/styles.css";

const App = ({ Component, pageProps }: AppProps) => {
  const [currentTheme, setCurrentTheme] = useState(theme.LIGHT_THEME);

  const toggleTheme = () => {
    if (currentTheme.name === "light") {
      setCurrentTheme(theme.DARK_THEME);
    } else {
      setCurrentTheme(theme.LIGHT_THEME);
    }
  };

  return (
    <Box pl={5} pr={5} pt={10} pb={5}>
      <Box mt={2} onClick={toggleTheme}>
        <Navigation />
      </Box>
      <ThemeProvider theme={currentTheme as Theme}>
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </Box>
  );
};

export default App;
