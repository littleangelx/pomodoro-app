import { useTimerChange } from "../../contexts/timeContext";

function SettingsTimers() {
  const {
    pomodoro,
    shortBreak,
    longBreak,
    setTimer,
    incrementTimer,
    decrementTimer,
  } = useTimerChange();

  return (
    <section className="times-section">
      <h2>Time (minutes)</h2>
      <div className="times-container">
        <div className="time">
          <p>pomodoro</p>
          <div className="timer-settings">
            <input
              type="number"
              value={pomodoro}
              onChange={(event) => setTimer("pomodoro", event.target.value)}
            />
            <div className="input-controls">
              <img
                src="./assets/icon-arrow-up.svg"
                onClick={() => incrementTimer("pomodoro")}
              />
              <img
                src="./assets/icon-arrow-down.svg"
                onClick={() => decrementTimer("pomodoro")}
              />
            </div>
          </div>
        </div>
        <div className="time">
          <p>short break</p>
          <div className="timer-settings">
            <input
              type="number"
              value={shortBreak}
              onChange={(event) => setTimer("shortBreak", event.target.value)}
            />
            <div className="input-controls">
              <img
                src="./assets/icon-arrow-up.svg"
                onClick={() => incrementTimer("shortBreak")}
              />
              <img
                src="./assets/icon-arrow-down.svg"
                onClick={() => decrementTimer("shortBreak")}
              />
            </div>
          </div>
        </div>
        <div className="time">
          <p>long break</p>
          <div className="timer-settings">
            <input
              type="number"
              value={longBreak}
              onChange={(event) => setTimer("longBreak", event.target.value)}
            />
            <div className="input-controls">
              <img
                src="./assets/icon-arrow-up.svg"
                onClick={() => incrementTimer("longBreak")}
              />
              <img
                src="./assets/icon-arrow-down.svg"
                onClick={() => decrementTimer("longBreak")}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SettingsTimers;
