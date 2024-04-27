import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

export const ThemeContext = createContext("light");

export default function ThemeWrapper({ children }) {
  const [mode, setMode] = useState("light");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  const responsiveTheme = responsiveFontSizes(theme);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={responsiveTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
