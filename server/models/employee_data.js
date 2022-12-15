import mongoose from "mongoose";

const employee_details_Schema = mongoose.Schema({
  employee_name: String,
  employee_id: Number,
  designation: String,
  creator_id: Object,
  experience_in_months: Number,
  age: Number,
  selectedFile: String,
});

var EmployeeData = mongoose.model("employee-details", employee_details_Schema);

export default EmployeeData;
