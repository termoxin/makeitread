import { useState } from "react";
import { Box, ThemeProvider } from "theme-ui";
import { Navigation } from "../src/components/nav/Nav";

import "../styles/styles.css";
import theme from "../theme";

export default function App({ Component, pageProps }) {
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
      <ThemeProvider theme={currentTheme}>
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </Box>
  );
}
