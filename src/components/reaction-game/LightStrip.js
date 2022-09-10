import React, { Fragment } from "react";
// Component
import Light from "./Light";

// CSS
import classes from "./LightStrip.module.css";

const LightStrip = () => {
  return (
    <div className={classes["light-strip"]}>
      <Light />
      <Light />
      <Light />
      <Light />
    </div>
  );
};

export default LightStrip;
