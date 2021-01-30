import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "flex-start",
    padding: "1em 3em",
  },
  text: {
    lineHeight: "25px",
    color: "#333333",
    fontFamily: "'Inconsolata', monospace",
    fontWeight: "800",
  },
});
