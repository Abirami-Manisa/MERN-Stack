import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import { Grid, CircularProgress } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { deleteData } from "../../actions/employee_details_actions";
import useStyles from "./styles";

const DisplayEmployeeData = ({ setCurrentId, setShowEdit, setShowDetails }) => {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  return !data?.length ? (
    <div style={{display:"flex",flexDirection:"column",margin:"0 auto"}}>
      <CircularProgress color="secondary" />
      <h3 style={{ color: "white" }}>No data found</h3>
    </div>
  ) : user?.result.name === "Admin" ? (
    <Grid container>
      {data.map((data) => (
        <Grid style={{ width: "20%" }}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={
                data.selectedFile ||
                "https://littleelmchamber.com/wp-content/uploads/2020/10/profile.jpg"
              }
            />

            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {data.employee_name}
            </Typography>

            <CardContent
              style={{
                padding: "8%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body2" color="textSecondary" component="p">
                <b style={{ color: "black" }}>ID:</b> {data.employee_id}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b style={{ color: "black" }}>Designation:</b>
                {data.designation}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b style={{ color: "black" }}>Experience:</b>
                {data.experience_in_months} months
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b style={{ color: "black" }}>Age:</b> {data.age}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                size="small"
                color="secondary"
                style={{ color: "red" }}
                disabled={!user?.result}
                onClick={() => dispatch(deleteData(data._id))}
              >
                <DeleteIcon fontSize="small" /> Delete
              </Button>
              <Button
                onClick={() => {
                  setCurrentId(data._id);
                  setShowEdit(true);
                  setShowDetails(false);
                }}
                disabled={!user?.result}
                style={{ color: "blue" }}
                size="small"
              >
                <EditIcon fontSize="medium" />
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  ) : (
    <Grid container>
      {data.map((data) => (
        <Grid style={{ width: "20%" }}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={
                data.selectedFile ||
                "https://littleelmchamber.com/wp-content/uploads/2020/10/profile.jpg"
              }
              title={data.title}
            />

            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {data.employee_name}
            </Typography>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <b style={{ color: "black" }}>ID:</b> {data.employee_id}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b style={{ color: "black" }}>Designation:</b>
                {data.designation}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b style={{ color: "black" }}>Experience:</b>
                {data.experience_in_months} months
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b style={{ color: "black" }}>Age:</b> {data.age}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              {(user?.result?.googleId === data?._id ||
                user?.result?._id === data?.creator_id) && (
                <>
                  <Button
                    size="small"
                    color="secondary"
                    style={{ color: "red" }}
                    disabled={!user?.result}
                    onClick={() => dispatch(deleteData(data._id))}
                  >
                    <DeleteIcon fontSize="small" /> Delete
                  </Button>
                  <Button
                    onClick={() => {
                      setCurrentId(data._id);
                      setShowEdit(true);
                      setShowDetails(false);
                    }}
                    disabled={!user?.result}
                    style={{ color: "blue" }}
                    size="small"
                  >
                    <EditIcon fontSize="medium" />
                    Edit
                  </Button>
                </>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayEmployeeData;
