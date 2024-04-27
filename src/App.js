import "./App.css";
import { useContext } from "react";
import { Box, Stack, Switch } from "@mui/material";
import { ThemeContext } from "./Contexts/Theme";
import Layout from "./Components/Layout";
import { DarkModeTwoTone, LightModeTwoTone } from "@mui/icons-material";

function App() {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <Layout>
      <Box className="App">
        <Stack
          direction="row"
          alignItems="center"
          mx={{ position: "fixed", top: "1rem", right: "2rem" }}
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
      </Box>
    </Layout>
  );
}

export default App;
