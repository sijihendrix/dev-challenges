import React from "react";
import { useStyles } from "./styles";
import Bckgrnd from "../../assests/Scarecrow.png";

export const Body = () => {
  const classes = useStyles();
  return (
    <main
      style={{
        backgroundImage: `url(${Bckgrnd})`,
      }}
      className={classes.root}
    >
      <div className={classes.content}>
        <div className={classes.contentControl}>
          <h1 className={classes.title}>I have bad news for you</h1>
          <p className={classes.message}>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button className={classes.button}>Back to homepage</button>
        </div>
      </div>
    </main>
  );
};
