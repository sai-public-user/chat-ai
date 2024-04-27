import "./App.css";
import { Box } from "@mui/material";
import Layout from "./Components/Layout";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  return (
    <Layout>
      <Box className="App">
        <ThemeToggle
          sx={{
            position: "fixed",
            top: "1rem",
            right: "2rem",
            display: { sm: "none", md: "flex" },
          }}
        />
      </Box>
    </Layout>
  );
}

export default App;
