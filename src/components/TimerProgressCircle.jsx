import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { useTimerChange } from "../contexts/timeContext";
import { useColourChange } from "../contexts/colourContext";

function TimerProgressCircle({ isPlaying }) {
  const [duration, setDuration] = useState(0);
  const [key, setKey] = useState(0);

  const { currentTimer, pomodoro, shortBreak, longBreak } = useTimerChange();
  const { colour } = useColourChange();

  useEffect(() => {
    if (currentTimer === "pomodoro") setDuration(pomodoro * 60);
    if (currentTimer === "shortBreak") setDuration(shortBreak * 60);
    if (currentTimer === "longBreak") setDuration(longBreak * 60);
    setKey((prevKey) => prevKey + 1);
  }, [currentTimer, pomodoro, shortBreak, longBreak]);

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div className="countdown">
      <CountdownCircleTimer
        key={key}
        duration={duration}
        colors={colour}
        trailColor="#161932"
        isPlaying={isPlaying}
        size={248}
        rotation="counterclockwise"
        onUpdate={duration}
      >
        {children}
      </CountdownCircleTimer>
    </div>
  );
}

export default TimerProgressCircle;
