import { useTimerChange } from "../contexts/timeContext";

function Controls() {
  const { currentTimer, setCurrentTimer } = useTimerChange();

  return (
    <div className="controls">
      <button
        className={`control-button ${
          currentTimer === "pomodoro" ? "active" : ""
        }`}
        onClick={() => setCurrentTimer("pomodoro")}
      >
        pomodoro
      </button>
      <button
        className={`control-button ${
          currentTimer === "shortBreak" ? "active" : ""
        }`}
        onClick={() => setCurrentTimer("shortBreak")}
      >
        short break
      </button>
      <button
        className={`control-button ${
          currentTimer === "longBreak" ? "active" : ""
        }`}
        onClick={() => setCurrentTimer("longBreak")}
      >
        long break
      </button>
    </div>
  );
}

export default Controls;
