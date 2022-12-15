import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "5%",
    height: "100%",
    position: "relative",
    flexBasis: "100%",
    width: "90%",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
  },

  title: {
    padding: "8%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContent: {
    padding: "8%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
});
