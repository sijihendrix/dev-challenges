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
    height: "100vh",
  },
  contentControl: {
    textAlign: "left",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "65vh",
    maxHeight: "600px",
    paddingTop: "7em",
  },
  title: {
    lineHeight: "90px",
    margin: "0",
    fontSize: "3.5rem",
    width: "90%",
    fontFamily: "'Space Mono', monospace",
  },
  message: {
    margin: "0",
    fontSize: "1.5rem",
    width: "60%",
    lineHeight: "33px",
    letterSpacing: "-0.035em",
    fontFamily: "'Space Mono', monospace",
  },
  button: {
    width: "32%",
    background: "#333333",
    height: "5em",
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: "'Space Mono', monospace",
  },
});
