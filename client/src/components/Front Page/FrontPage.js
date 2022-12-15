import React from "react";
import { Typography, Paper, Container, Grid, Grow } from "@material-ui/core";

import Authentication from "../Authentication/Authentication";
import useStyles from "./styles";

const FrontPage = () => {
  const classes = useStyles();
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={1}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={9}
            style={{ position: "relative", right: "10%", marginTop: "50px",padding:"0 5%" }}
            className="py-3"
          >
            <Authentication />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            style={{ position: "relative", right: "30%", marginTop: "80px" }}
          >
            <Paper
              className={classes.paper}
              elevation={1}
              style={{
                background: "transparent",
                color: "white",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                style={{ fontStyle: "italic", fontSize: "2vw" }}
              >
                <p>Welcome to Employee Management System Portal</p>
                <p>Sign In/Sign Up to create your Employment Details</p>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default FrontPage;
