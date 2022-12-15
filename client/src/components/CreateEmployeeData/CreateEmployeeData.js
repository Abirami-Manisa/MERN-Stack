import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { TextField, Button, Typography, Paper } from "@material-ui/core";

import { createData, updateData } from "../../actions/employee_details_actions";
import useStyles from "./styles";

const CreateEmployeeData = ({ currentId, setCurrentId }) => {
  const [employeeData, setEmployeeData] = useState({
    employee_name: "",
    employee_id: [],
    creator_id: {},
    designation: "",
    experience_in_months: [],
    age: [],
    selectedFile: "",
  });
  const data = useSelector((state) =>
    currentId ? state.data.data.find((d) => d._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  
  useEffect(() => {
    if (data) setEmployeeData(data);
   user && setEmployeeData({ ...employeeData, creator_id: user.result._id });
  }, [data]);

  const clear = () => {
    setCurrentId(0);
    setEmployeeData({
      employee_name: "",
      employee_id: [],
      creator_id: {},
      designation: "",
      experience_in_months: [],
      age: [],
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createData({ ...employeeData }));
      clear();
      navigate("/employee-list");
    } else {
      dispatch(
        updateData(currentId, {
          ...employeeData,
        })
      );
      clear();
      navigate("/employee-list");
    }
  };

  return !user?.result?.name ? (
    <Paper className={classes.paper} elevation={6}>
      <Typography variant="h6" align="center">
        Please Sign In to create the Employee Data.
      </Typography>
    </Paper>
  ) : (
    <div className={classes.cardBorder}>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentId ? `Edit "${data.employee}"` : "Fill your details"}
          </Typography>

          <TextField
            name="employee_name"
            variant="outlined"
            label="Employee Name"
            fullWidth
            value={employeeData.employee_name}
            onChange={(e) =>
              setEmployeeData({
                ...employeeData,
                employee_name: e.target.value,
              })
            }
            required
          />

          <TextField
            name="employee_id"
            variant="outlined"
            label="ID"
            fullWidth
            value={employeeData.employee_id}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, employee_id: e.target.value })
            }
            required
          />
          <TextField
            name="designation"
            variant="outlined"
            label="Designation"
            fullWidth
            value={employeeData.designation}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, designation: e.target.value })
            }
            required
          />
          <TextField
            name="experience_in_months"
            variant="outlined"
            label="Experience in months"
            fullWidth
            value={employeeData.experience_in_months}
            onChange={(e) =>
              setEmployeeData({
                ...employeeData,
                experience_in_months: e.target.value,
              })
            }
            required
          />
          <TextField
            name="age"
            variant="outlined"
            label="Age"
            fullWidth
            value={employeeData.age}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, age: e.target.value })
            }
            required
          />

          <div style={{ position: "relative", left: "30px" }}>
            <div align="left"> Attach the Image</div>

            <div className={classes.fileInput} align="right">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setEmployeeData({ ...employeeData, selectedFile: base64 })
                }
                required
              />
            </div>
          </div>

          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button variant="contained" size="small" onClick={clear} fullWidth>
            Clear
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default CreateEmployeeData;
