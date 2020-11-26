import { swiss } from "@theme-ui/presets";

const LIGHT_THEME = {
  ...swiss,
  name: "light",
  colors: {
    ...swiss.colors,
    text: "#000",
    muted: "#828282",
    link: "#1EABF9",
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
    background: "#211f1f",
    text: "#fff",
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
