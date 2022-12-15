import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(5),
    width: "60%",
    position: "relative",
    marginTop: "1% !important",
    margin:"0 auto"
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "50%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  cardBorder:{
    width:"100%"
  }
}));
