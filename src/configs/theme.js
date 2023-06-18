import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3993ff",
      hover: "#74b3ff",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#1a2935",
    },
  },
  typography: {
    fontFamily: [
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    body1: {
      fontSize: "1.6rem",
    },
    body2: {
      fontSize: "1.2rem",
      color: "#F1F1F1",
    },
    button: {
      fontSize: "1.6rem",
      fontWeight: "600",
    },
    tooltip: {
      fontSize: "1.2rem",
    },
    h1: {
      fontSize: "5.6rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "2rem",
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: 10,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: "#fff", boxShadow: "none" },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: "1.8rem",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1.6rem",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
