import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    backgroundSize: "40%",
    backgroundPosition: "8% 50%",
    backgroundRepeat: "no-repeat",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-end",
    paddingTop: "9rem",
  },
  contentControl: {
    textAlign: "left",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingBottom: "11rem",
    maxHeight: "600px",
  },
  title: {
    lineHeight: "90px",
    margin: "0",
    fontSize: "3.5rem",
    width: "90%",
    fontFamily: "'Space Mono', monospace",
  },
  message: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    margin: "0",
    fontSize: "1.5rem",
    width: "60%",
    lineHeight: "33px",
    letterSpacing: "-0.035em",
    fontFamily: "'Space Mono', monospace",
  },
  button: {
    width: "30%",
    background: "#333333",
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: "'Space Mono', monospace",
    padding: "1.5rem 0",
  },
  "@media (max-width: 504px)": {
    root: {
      //background: "blue",
      backgroundSize: "100%",
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
    },
    title: {
      lineHeight: "4rem",
      fontSize: "3.1rem",
      width: "100%",
    },
    message: {
      width: "100%",
      fontSize: "1.3rem",
      lineHeight: "2rem",
      paddingBottom: "3rem",
    },
    button: {
      width: "70%",
      padding: "2.3rem 0",
    },
    contentControl: {
      width: "100%",
      paddingLeft: " 2rem",
      paddingBottom: "4rem",
    },
    content: {
      alignItems: "center",
      paddingTop: "28rem",
    },
  },
});
