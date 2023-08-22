import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component={"div"}>
            News
          </Typography>
          <Button
            style={{
              marginLeft: "1000px",
              color: "black",
              backgroundColor: "white",
            }}
            variant="contained"
            size="small"
          >
            Signup
          </Button>
          <Typography></Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
