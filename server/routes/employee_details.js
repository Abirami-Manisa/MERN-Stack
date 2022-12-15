import express from "express";

import {
  getData,
  createData,
  updateData,
  deleteData,
  getDataBySearch,
} from "../controllers/employee_details.js";
import authentication from "../middleware/authentication.js";

const router = express.Router();

router.get("/", getData);
router.post("/", authentication, createData);
router.patch("/:id", authentication, updateData);
router.delete("/:id", authentication, deleteData);
router.get("/search", getDataBySearch);

export default router;
