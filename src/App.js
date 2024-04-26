import "./App.css";
import { useContext } from "react";
import { Box, Stack, Switch, Typography, useTheme } from "@mui/material";
import { ThemeContext } from "./Contexts/Theme";

function App() {
  const theme = useTheme();
  const { mode, setMode } = useContext(ThemeContext);
  console.log(theme);
  return (
    <Box className="App" mx={{ background: theme.palette.background.default }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography mx={{ color: theme.palette.primary.main }}>Dark</Typography>
        <Switch
          checked={mode === "light"}
          onChange={() =>
            setMode((prev) => (prev === "light" ? "dark" : "light"))
          }
        />
        <Typography mx={{ color: theme.palette.primary.main }}>
          Light
        </Typography>
      </Stack>
    </Box>
  );
}

export default App;
