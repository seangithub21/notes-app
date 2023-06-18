import React from "react";
import { Box, useTheme } from "@mui/material";

import getStyles from "./styles";

const Layout = ({ children }) => {
  const theme = useTheme();
  const classes = getStyles({ theme });

  return (
    <Box sx={classes.container}>
      <Box sx={classes.content}>{children}</Box>
    </Box>
  );
};

export default Layout;
