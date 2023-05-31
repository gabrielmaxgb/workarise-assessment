import { createTheme } from "@mui/material";
import "@fontsource/alegreya-sc";

declare module "@mui/material/styles" {
  export interface Theme {
    extraColors: {
      workarise: string;
      white: string;
      black: string;
    };
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    extraColors?: {
      workarise?: string;
      white?: string;
      black?: string;
    };
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  extraColors: {
    workarise: "#88E4BB",
    white: "#ffffff",
    black: "#000000",
  },
  palette: {
    primary: {
      main: "#88E4BB",
    },
    secondary: {
      main: "#00d3ff",
    },
  },
  typography: {
    allVariants: {
      color: "#88E4BB",
    },
    fontFamily: [
      "Alegreya SC, serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
