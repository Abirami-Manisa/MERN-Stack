import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { AppBar, TextField, Button, Paper } from "@material-ui/core";

import {
  getData,
  getDataBySearch,
} from "../../actions/employee_details_actions";
import DisplayEmployeeData from "../DisplayEmployeeData/DisplayEmployeeData";
import EditEmployeeData from "../EditEmployeeData/EditEmployeeData";
import Pagination from "../Pagination/Pagination";
import useStyles from "./styles";

const SearchEmployeeDetails = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const page = query.get("page") || 1;

  useEffect(() => {
    dispatch(getData());
  }, [currentId, dispatch]);

  const searchData = () => {
    if (search.trim()) {
      dispatch(getDataBySearch(search));
      navigate(`/search?searchQuery=${search || "none"}`);
    } else {
      dispatch(getData());
      navigate("/employee-list", { replace: true });
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchData();
    }
  };

  return (
    <div>
      <div style={{ display: !showEdit ? "none" : "flex" }}>
        <EditEmployeeData
          currentId={currentId}
          setCurrentId={setCurrentId}
          setShowEdit={setShowEdit}
          setShowDetails={setShowDetails}
        />
      </div>
      <div style={{ display: showDetails ? "block" : "flex" }}>
        <AppBar
          className={classes.appBarSearch}
          position="static"
          color="inherit"
        >
          <TextField
            onKeyDown={handleKeyPress}
            name="search"
            variant="outlined"
            label="Search Employee"
            fullWidth
            color="secondary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: "10px" }}
          />

          <Button
            onClick={searchData}
            variant="contained"
            color="secondary"
            className={classes.buttonSearch}
          >
            Search
          </Button>
        </AppBar>

        <div style={{ display: showDetails ? "flex" : "none" }}>
          <DisplayEmployeeData
            setCurrentId={setCurrentId}
            setShowEdit={setShowEdit}
            setShowDetails={setShowDetails}
          />
        </div>
        <Paper className={classes.pagination}>
          <Pagination page={page} />
        </Paper>
      </div>
    </div>
  );
};

export default SearchEmployeeDetails;
