import { useState } from "react";
import TimerProgressCircle from "./TimerProgressCircle";

function Timer() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <div className="timer">
        <div className="outer-circle">
          <div className="inner-circle">
            <TimerProgressCircle isPlaying={isPlaying} />
          </div>
        </div>
      </div>
      <button className="play-pause" onClick={() => setIsPlaying((is) => !is)}>
        {isPlaying ? "PAUSE" : "START"}
      </button>
    </>
  );
}

export default Timer;
