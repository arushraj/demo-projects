import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
  targetTime,
  remainingTime,
  resetTimer,
  ref,
}) {
  const dialog = useRef();
  const result = remainingTime <= 0 ? "lost" : "won";
  const secondsLeft = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      {result === "won" ? <h2>Your score is {score}.</h2> : ""}

      <p>
        The target time was <strong>{targetTime}</strong> second
        {targetTime > 1 ? "s" : ""}.
      </p>
      <p>
        You stopped the timer with <strong>{secondsLeft} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={resetTimer}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
