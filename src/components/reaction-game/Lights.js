import React, { Fragment, useState, useEffect } from "react";

// Components
import LightStrip from "./LightStrip";

// CSS
import classes from "./Lights.module.css";
import Timer from "./Timer";

const Lights = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [highScoreTime, setHighScoreTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [time, setTime] = useState(0);

  // const timer = useEffect(
  //   setInterval(() => {
  //     console.log(`Time Passed: ${time}`);
  //     time += 1;
  //     if (time > 5) {
  //       clearInterval(timer);
  //     }
  //   }, 1000),
  //   [time]
  // );

  return (
    <Fragment>
      <div className={classes["f1-lights"]}>
        <div className={classes["back-board"]}></div>
        <LightStrip />
        <LightStrip />
        <LightStrip />
        <LightStrip />
        <LightStrip />
      </div>
      <Timer />
      <p>Credit to @jaffathecake for CSS inspiration</p>
    </Fragment>
  );
};

export default Lights;
