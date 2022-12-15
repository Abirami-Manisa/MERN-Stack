import express from "express";
import mongoose from "mongoose";

import Employee_data from "../models/employee_data.js";

const router = express.Router();

export const getData = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 5;
    const startIndex = (Number(page) - 1) * LIMIT;
    const totalPages = await Employee_data.countDocuments({});
    const postData = await Employee_data.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: postData,
      currentPage: Number(page),
      numberofPages: Math.ceil(totalPages / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createData = async (req, res) => {
  const data = req.body;

  const newPostData = new Employee_data({ ...data });

  try {
    await newPostData.save();

    res.status(201).json(newPostData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateData = async (req, res) => {
  const { id } = req.params;
  const {
    employee_name,
    employee_id,
    creator_id,
    designation,
    experience_in_months,
    age,
    selectedFile,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedData = {
    employee_name,
    employee_id,
    creator_id,
    designation,
    experience_in_months,
    age,
    selectedFile,
    _id: id,
  };

  await Employee_data.findByIdAndUpdate(id, updatedData, { new: true });

  res.json(updatedData);
};

export const deleteData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No employee data found with id: ${id}`);

  await Employee_data.findByIdAndRemove(id);

  res.json({ message: "Data deleted successfully." });
};

export const getDataBySearch = async (req, res) => {
  const searchQuery = req.query.searchQuery;
  try {
    const title = new RegExp(searchQuery, "i");
    const data = await Employee_data.find({ employee_name: title });

    res.json({ data: data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
