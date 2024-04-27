import {
  InboxTwoTone,
  MailLockTwoTone,
  SettingsInputAntennaTwoTone,
} from "@mui/icons-material";
import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const drawer = (
  <Grid
    container
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    flex={1}
  >
    <Grid item>
      <Toolbar display="flex" sx={{ gap: 2 }} alignItems="center">
        <SettingsInputAntennaTwoTone sx={{ fontSize: 30 }} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { sm: "none", md: "block" } }}
        >
          Chat AI
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxTwoTone /> : <MailLockTwoTone />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
    <Grid item>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxTwoTone /> : <MailLockTwoTone />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  </Grid>
);

export const drawerWidth = 300;

export default function Sidebar({
  handleDrawerClose,
  handleDrawerTransitionEnd,
  mobileOpen,
}) {
  const theme = useTheme();
  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor:
              theme.palette.mode === "light"
                ? theme.palette.grey[300]
                : theme.palette.grey[900],
          },
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.grey[300]
              : theme.palette.grey[900],
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        elevation={16}
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor:
              theme.palette.mode === "light"
                ? theme.palette.grey[300]
                : theme.palette.grey[900],
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}
