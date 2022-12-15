import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 1,
    marginBottom: "20px",
    display: "flex",
    padding: "10px",
    position: "relative",
    flexDirection: "column",
    width: "35%",
    margin: "2% auto",
  },

  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  table: {
    paddingTop: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  appBar: {
    borderRadius: 15,
    margin: "10px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSearch: {
    marginBottom: 5,
    width: "25%",
    margin: "0 auto",
  },
  pagination: {
    width: "12.5%",
    margin: "3% auto",
    display: "flex",
    flexDirection: "column",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));
