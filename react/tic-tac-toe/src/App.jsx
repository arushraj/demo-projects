import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/player";
import GameOver from "./components/GameOver";

const players = [
  { Symbol: "X", name: "Player 1" },
  { Symbol: "O", name: "Player 2" },
];

function App() {
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [restart, setRestart] = useState(false);
  const [winner, setWinner] = useState(null);
  function handleSelectSquare() {
    if (restart) setRestart(false);
    setActivePlayerIndex((prev) => (prev === 0 ? 1 : 0));
  }
  function getWinner(player) {
    setWinner(player);
  }
  function handleRestart() {
    setRestart(true);
    setActivePlayerIndex(0);
    setWinner(null);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {players.map((player, index) => (
            <Player key={index} player={player} isAvtive={index === activePlayerIndex} />
          ))}
        </ol>
        <GameBoard
          activePlayer={players[activePlayerIndex]}
          onSelectSquare={handleSelectSquare}
          restartGame={restart}
          weHaveWinner={getWinner}
        />
        {winner ? (
          <GameOver winner={winner} restartGame={handleRestart} />
        ) : null}
      </div>
    </main>
  );
}

export default App;
