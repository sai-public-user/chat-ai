import { useContext } from "react";
import { Stack, Switch } from "@mui/material";
import { ThemeContext } from "../Contexts/Theme";
import { DarkModeTwoTone, LightModeTwoTone } from "@mui/icons-material";

export default function ThemeToggle({ sx }) {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <Stack
      direction="row"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={sx}
    >
      <LightModeTwoTone />
      <Switch
        checked={mode === "light"}
        onChange={() =>
          setMode((prev) => (prev === "light" ? "dark" : "light"))
        }
      />
      <DarkModeTwoTone />
    </Stack>
  );
}
