import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "2em",
    paddingTop: "6em",
  },
  name: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.8rem",
    fontWeight: "700",
  },
});
