import { useState } from "react";
import { ThemeProvider } from "theme-ui";

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
    <ThemeProvider theme={currentTheme}>
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
