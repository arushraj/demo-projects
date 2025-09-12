import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
import ResultForwardRefModal from "./ResultForwardRefModal";
export default function TimerChallenge({ title, targetTime }) {
  const intervalRef = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(intervalRef.current);
    dialog.current.open();
  }

  function resetTimer() {
    setTimeRemaining(targetTime * 1000);
  }
  function startCountdown() {
    intervalRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }
  function stopCountdown() {
    clearInterval(intervalRef.current);
    // setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        remainingTime={timeRemaining}
        targetTime={targetTime}
        resetTimer={resetTimer}
      />

      {/* in older version of react we use forwardRef to bind the ref of dialog. */}
      {/* <ResultForwardRefModal
        ref={dialog}
        remainingTime={timeRemaining}
        targetTime={targetTime}
        resetTimer={resetTimer}
      /> */}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? stopCountdown : startCountdown}>
            {timerIsActive ? "Stop" : "Start"} Countdown
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Time is Running Out..." : "Time inactive"}
        </p>
      </section>
    </>
  );
}
