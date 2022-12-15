import React from "react";
import { NavLink } from "react-router-dom";

import { Typography, Paper, Button } from "@material-ui/core";

import useStyles from "./styles";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  return !user?.result.name ? (
    <div className={classes.cardBorder}>
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Welcome to the Portal
          <p>Sign In /Sign Up to create the employee details</p>
        </Typography>
        <Button>
          <NavLink to="/employee-list" style={{ color: "purple" }}>
            Click here to view the employee details
          </NavLink>
        </Button>
      </Paper>
    </div>
  ) : (
    <div>
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Welcome to the Portal {user?.result.name}
        </Typography>
        <Button>
          <NavLink to="/employee-list" style={{ color: "purple" }}>
            Click here to view the employee details
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/add-employees" style={{ color: "purple" }}>
            Click here to add the employee details
          </NavLink>
        </Button>
      </Paper>
    </div>
  );
};

export default Home;
