import React from "react";
import { useStyles } from "./styles";
export const Header = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <h2 className={classes.text}>404 NOT FOUND</h2>
    </main>
  );
};
