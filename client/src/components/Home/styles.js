import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 1,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
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
  paper: {
    padding: theme.spacing(5),
    width: "50%",
    position: "relative",
    margin:"0 auto",
    marginTop: "100px",
    display:"flex",
    flexDirection:"column"
  },
  cardBorder:{
    width:"100%"
  }
}));
