import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useMemo, useState } from "react";

const globalTheme = {
  typography: {
    fontSizes: {
      display: "64px",
      heading1: "56px",
      heading2: "48px",
      heading3: "36px",
      subheading: "22px",
      bodyL: "20px",
      bodyM: "18px",
      body: "16px",
      bodyS: "14px",
    },
  },
  palette: {
    primary: {
      main: "#4e6fe4",
      950: "#060D25",
      900: "#0E1848",
      800: "#1E3296",
      700: "#2E3FA3",
      600: "#3C50C8",
      500: "#4e6fe4",
      400: "#6987F2",
      300: "#849DF6",
      200: "#A0B3F8",
      100: "#D0DAFB",
      50: "#F6F8FE",
      contrastText: "white",
    },
    grey: {
      900: "#202227",
      800: "#2E3038",
      700: "#454854",
      600: "#5C6070",
      500: "#7E8395",
      400: "#9A9EAC",
      300: "#ABAEBA",
      200: "#C7C9D1",
      100: "#E3E4E8",
      50: "#F6F6F9",
      contrastText: "white",
    },
  },
  breakpoints: {
    mobS: 320,
    mobM: 440,
    mobL: 520,
    tabS: 576,
    tabM: 768,
    tabL: 880,
    deskS: 992,
    deskM: 1366,
    deskL: 1560,
  },
};

export const above = (breakpoint) => {
  return `@media screen and (min-width: ${globalTheme.breakpoints[breakpoint]}px)`;
};

export const below = (breakpoint) => {
  return `@media screen and (max-width: ${globalTheme.breakpoints[breakpoint]}px)`;
};

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => {
    return { ...globalTheme, mode, setMode, media: { above, below } };
  }, [mode]);
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
