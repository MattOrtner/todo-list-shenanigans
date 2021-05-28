import React, { useState, useEffect } from "react";
import { useInterval } from "../hooks/useInterval";

const Timer = ({ time }) => {
  const [isTimerOn, setTimerOn] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(null);
  const [timerSeconds, setTimerSeconds] = useState(0);

  useEffect(() => {
    setTimerMinutes(time);
  }, [time]);

  useInterval(
    () => {
      startTimer();
    },
    isTimerOn ? 1000 : null
  );

  const startButton = () => {
    setTimerOn(true);
  };

  const startTimer = () => {
    if (timerSeconds === 0) {
      setTimerMinutes(timerMinutes - 1);
      setTimerSeconds(59);
    } else {
      setTimerSeconds(timerSeconds - 1);
    }
  };

  const pauseTimer = () => {
    setTimerOn(false);
  };

  const addTime = () => {
    const addTime = parseInt(timerMinutes) + 3;
    setTimerMinutes(addTime);
  };

  return (
    <div className="timer">
      {isTimerOn ? (
        <div className="pause-btn" onClick={pauseTimer}>
          pause
        </div>
      ) : (
        <div className="start-btn" onClick={startButton}>
          start
        </div>
      )}
      <div className="time-display">
        {timerMinutes}m {timerSeconds}s
      </div>
      <div className="add-time" onClick={addTime}>
        +
      </div>
    </div>
  );
};

export default Timer;
