import { swiss } from "@theme-ui/presets";

const LIGHT_THEME = {
  ...swiss,
  name: "light",
  colors: {
    ...swiss.colors,
    text: "#000",
    muted: "#828282",
    link: "#1EABF9",
    redish: "#FD547A",
  },
  containers: {
    card: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      maxWidth: "300px",
    },
    page: {
      width: "100%",
      maxWidth: "960px",
      m: 0,
      mx: "auto",
    },
  },
  badges: {
    primary: {
      bg: "#FD547A",
      color: "#fff",
    },
  },
  buttons: {
    primary: {
      color: "#fff",
      bg: "redish",
    },
    secondary: {
      color: "#fff",
      bg: "#7ed063",
    },
  },
  styles: {
    ...swiss.styles,
    a: { color: "link" },
    p: { ...swiss.styles.p, marginTop: 15 },
    h2: { ...swiss.styles.h2, marginTop: 45 },
  },
};

const DARK_THEME = {
  ...LIGHT_THEME,
  name: "dark",
  colors: {
    ...LIGHT_THEME.colors,
    background: "#1A1A1A",
    text: "rgb(224, 224, 224)",
  },
  containers: {
    page: {
      ...LIGHT_THEME.containers.page,
      background: "#000",
      color: "#fff",
    },
    card: {
      ...LIGHT_THEME.containers.card,
      background: "#24292e",
      color: "#fff",
    },
  },
};

export default { LIGHT_THEME, DARK_THEME };
