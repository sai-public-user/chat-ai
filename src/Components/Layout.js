import {
  AppBar,
  CssBaseline,
  Grid,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Sidebar, { drawerWidth } from "./Sidebar";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Grid container spacing={2} m={0} sx={{ height: "100vh" }} maxWidth="sm">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { sm: "block", md: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
            <SettingsInputAntennaTwoTone sx={{ fontSize: 30 }} />
            Chat AI
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        item
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <Sidebar
          handleDrawerClose={handleDrawerClose}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
          mobileOpen={mobileOpen}
        />
      </Grid>
      <Grid
        item
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
