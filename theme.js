import { roboto } from "@theme-ui/presets";

const LIGHT_THEME = {
  ...roboto,
  name: "light",
  containers: {
    card: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "4px",
      p: 2,
    },
    page: {
      width: "100%",
      maxWidth: "960px",
      m: 0,
      mx: "auto",
    },
  },
  styles: {
    ...roboto.styles,
  },
};

const DARK_THEME = {
  ...LIGHT_THEME,
  name: "dark",
  containers: {
    page: {
      ...LIGHT_THEME.containers.page,
      background: "#000",
      color: "#fff",
    },
    card: {
      ...LIGHT_THEME.containers.card,
      background: "#000",
      color: "#fff",
    },
  },
};

export default { LIGHT_THEME, DARK_THEME };
