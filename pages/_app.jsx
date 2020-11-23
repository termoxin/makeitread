import { ThemeProvider } from "theme-ui";

import "../styles/styles.css";
import theme from "../theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
