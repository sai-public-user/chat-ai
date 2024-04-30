import "./App.css";
import { Box } from "@mui/material";
import Layout from "./Components/Layout";
import Chat from "./Components/Chat";

function App() {
  return (
    <Layout>
      <Box className="App" sx={{ height: "100vh" }}>
        <Chat />
      </Box>
    </Layout>
  );
}

export default App;
