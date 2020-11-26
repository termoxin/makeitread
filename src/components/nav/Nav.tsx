import React from "react";
import { Box } from "theme-ui";
import logo from "./logo.svg";

export const Navigation = () => (
  <Box sx={{ cursor: "pointer" }}>
    <img src={logo} />
  </Box>
);
