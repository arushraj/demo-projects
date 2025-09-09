export default function GameOver({ winner, restartGame }) {
  return (
    <div id="game-over">
      <h2>Gae Over</h2>
      {winner === "tie" ? (
        <p>It's a draw!</p>
      ) : (
        <p>
          We have a Winner!<br />{" "}
          <b>
            Congratulation <br />
            {winner.name}
          </b>
        </p>
      )}
      <button onClick={restartGame}>Restart Game!</button>
    </div>
  );
}
