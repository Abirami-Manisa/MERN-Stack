import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const signOut = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate("/sign", { replace: true });

    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) signOut();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const clickMenuButton = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleProfileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={{position:"sticky",top:"1px",zIndex:"99999"}}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "purple" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={clickMenuButton}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)}
            onClose={() => {
              setAnchorEl2(null);
            }}
          >
            <List>
              <ListItem>
                <NavLink to="/home" style={{ color: "Purple" }}>
                  <ListItemText primary="Home" />
                </NavLink>
              </ListItem>

              <ListItem>
                <NavLink to="/employee-list" style={{ color: "Purple" }}>
                  <ListItemText primary="Employee-List" />
                </NavLink>
              </ListItem>

              <ListItem>
                <NavLink to="/add-employees" style={{ color: "Purple" }}>
                  <ListItemText primary="Add-Details" d />
                </NavLink>
              </ListItem>
            </List>
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/home" style={{ color: "purple" }}>
              Employee Management System
            </NavLink>
          </Typography>
          <div>
            {user ? (
              <div>
                <IconButton
                  size="large"
                  onClick={handleProfileMenu}
                  color="inherit"
                >
                  <div style={{ fontSize: "60%", paddingRight: "20px" }}>
                    Welcome {user?.result.name}
                  </div>
                  <AccountCircle />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  style={{zIndex:"999999"}}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleProfileClose}
                >
                  <MenuItem style={{ color: "Purple" }} onClick={signOut}>
                    Sign Out
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <IconButton
                  size="large"
                  onClick={handleProfileMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  style={{zIndex:"999999"}}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleProfileClose}
                >
                  <MenuItem>
                    <NavLink to="/auth" style={{ color: "Purple" }}>
                      Sign In
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/authsignup" style={{ color: "Purple" }}>
                      Sign Up
                    </NavLink>
                  </MenuItem>
                </Menu>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
