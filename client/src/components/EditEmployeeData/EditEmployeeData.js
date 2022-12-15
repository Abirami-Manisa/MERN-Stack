import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { TextField, Button, Typography, Paper } from "@material-ui/core";

import { createData, updateData } from "../../actions/employee_details_actions";
import useStyles from "./styles";

const EditEmployeeData = ({
  currentId,
  setCurrentId,
  setShowEdit,
  setShowDetails,
}) => {
  const [employeeData, setEmployeeData] = useState({
    employee_name: "",
    employee_id: [],
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

  useEffect(() => {
    if (data) setEmployeeData(data);
  }, [data]);

  const clear = () => {
    setShowEdit(false);
    setShowDetails(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createData({ ...employeeData }));
      clear();
    } else {
      dispatch(
        updateData(currentId, {
          ...employeeData,
        })
      );
      clear();
    }

    setShowEdit(false);
    setShowDetails(true);
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{`Editing the details of ${employeeData.employee_name}`}</Typography>
        <TextField
          name="employee_name"
          variant="outlined"
          label="Name"
          fullWidth
          value={employeeData.employee_name}
          onChange={(e) => {
            currentId === 0
              ? alert(
                  "Click the edit on any of the employee details to change the data"
                )
              : setEmployeeData({
                  ...employeeData,
                  employee_name: e.target.value,
                });
          }}
          required
        />

        <TextField
          name="employee_id"
          variant="outlined"
          label="ID"
          fullWidth
          value={employeeData.employee_id}
          onChange={(e) => {
            currentId === 0
              ? alert(
                  "Click the edit on any of the employee details to change the data"
                )
              : setEmployeeData({
                  ...employeeData,
                  employee_id: e.target.value,
                });
          }}
          required
        />
        <TextField
          name="designation"
          variant="outlined"
          label="Designation"
          fullWidth
          value={employeeData.designation}
          onChange={(e) => {
            currentId === 0
              ? alert(
                  "Click the edit on any of the employee details to change the data"
                )
              : setEmployeeData({
                  ...employeeData,
                  designation: e.target.value,
                });
          }}
          required
        />
        <TextField
          name="experience_in_months"
          variant="outlined"
          label="Experience in months"
          fullWidth
          value={employeeData.experience_in_months}
          onChange={(e) => {
            currentId === 0
              ? alert(
                  "Click the edit on any of the employee details to change the data"
                )
              : setEmployeeData({
                  ...employeeData,
                  experience_in_months: e.target.value,
                });
          }}
          required
        />
        <TextField
          name="age"
          variant="outlined"
          label="Age"
          fullWidth
          value={employeeData.age}
          onChange={(e) => {
            currentId === 0
              ? alert(
                  "Click the edit on any of the employee details to change the data"
                )
              : setEmployeeData({ ...employeeData, age: e.target.value });
          }}
          required
        />

        <div style={{ position: "relative", left: "30px" }}>
          <div align="left"> Attach the Image</div>

          <div className={classes.fileInput} align="right">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                currentId === 0
                  ? alert(
                      "Click the edit on any of the employee details to change the data"
                    )
                  : setEmployeeData({ ...employeeData, selectedFile: base64 });
              }}
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
          Update
        </Button>
        <Button variant="contained" size="small" onClick={clear} fullWidth>
          Back to the details
        </Button>
      </form>
    </Paper>
  );
};

export default EditEmployeeData;
