import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

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
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
