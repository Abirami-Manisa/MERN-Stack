import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@material-ui/lab";

import { getData } from "../../actions/employee_details_actions";
import useStyles from "./styles";

const Paginate = ({ page }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { numberofPages } = useSelector((state) => state.data);

  useEffect(() => {
    if (page) dispatch(getData(page));
  }, [dispatch, page]);

  return (
    <Pagination
      className={`${classes.ul} ${classes.page}`}
      count={numberofPages}
      page={Number(page) || 1}
      variant="outlined"
      color="secondary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/employee-list?page=${item.page}`}
          className={`${classes.ul} ${classes.page}`}
        />
      )}
    />
  );
};

export default Paginate;
