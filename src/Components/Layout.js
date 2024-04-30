import {
  AppBar,
  Box,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Sidebar, { drawerWidth } from "./Sidebar";
import { MenuTwoTone, SettingsInputAntennaTwoTone } from "@mui/icons-material";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const theme = useTheme();

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
          "& .MuiDrawer-paper": {
            backgroundColor:
              theme.palette.mode === "light"
                ? theme.palette.grey[300]
                : theme.palette.grey[900],
          },
        }}
      >
        <Box display="flex">
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuTwoTone />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              display="flex"
              alignitems="center"
              sx={{ gap: 2 }}
            >
              <SettingsInputAntennaTwoTone sx={{ fontSize: 30 }} />
              Chat AI
            </Typography>
            <ThemeToggle
              sx={{
                position: "fixed",
                top: "1rem",
                right: "2rem",
              }}
            />
          </Toolbar>
        </Box>
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
        xs
        sx={{
          flexGrow: 1,
          px: 3,
          //   width: { sm: `calc(100vw - ${drawerWidth}px)`, overflow: "auto" },
        }}
      >
        <ThemeToggle
          sx={{
            position: "fixed",
            top: "1rem",
            right: "2rem",
            display: { sm: "none", md: "flex" },
          }}
        />
        {children}
      </Grid>
    </Grid>
  );
}
