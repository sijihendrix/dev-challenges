import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    //justifyContent: "flex-end",
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
  },
  title: {
    lineHeight: "95px",
    margin: "0",
    //fontSize: "4.5rem",
    //width: "59%",
  },
  message: {
    //textAlign: "left",
    margin: "0",
  },
  button: {},
});
