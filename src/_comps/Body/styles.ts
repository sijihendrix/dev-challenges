import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-end",
    height: "80vh",
  },
  contentControl: {
    textAlign: "left",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "70vh",
    paddingTop: "5em",
  },
  title: {
    lineHeight: "95px",
    margin: "0",
    fontSize: "4.5rem",
    width: "90%",
  },
  message: {
    margin: "0",
    fontSize: "1.5rem",
    width: "45%",
    lineHeight: "36px",
  },
  button: {
    width: "25%",
    background: "#333333",
    height: "5em",
    color: "#fff",
    textTransform: "uppercase",
  },
});
