import { useState, useEffect, useRef } from "react";
import { WINNING_COMBINATIONS } from "../winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  onSelectSquare,
  activePlayer,
  weHaveWinner,
  restartGame,
}) {
  const [gameBoard, setGameBoard] = useState([...initialGameBoard]);
  const hasMounted = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true; // Skip the effect on the initial render
      return;
    }
    getWinner(gameBoard);
    onSelectSquare();
  }, [gameBoard]);
  useEffect(() => {
    if (restartGame) {
      hasMounted.current = false;
      setGameBoard([...initialGameBoard]);
    }
  }, [restartGame]);
  function handleSelectSquare(row, col) {
    setGameBoard((prev) => {
      const updatedBoard = [...prev.map((r) => [...r])];
      updatedBoard[row][col] = activePlayer.Symbol;
      return updatedBoard;
    });
  }
  function getWinner(board) {
    for (let combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      const { row: rowA, column: colA } = a;
      const { row: rowB, column: colB } = b;
      const { row: rowC, column: colC } = c;
      if (
        board[rowA][colA] &&
        board[rowA][colA] === board[rowB][colB] &&
        board[rowA][colA] === board[rowC][colC]
      ) {
        weHaveWinner(activePlayer);
        return;
      } else if (board.flat().every((cell) => cell !== null)) {
        weHaveWinner("tie"); // It's a draw
        return;
      }
    }
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button
                  type="button"
                  title=""
                  value={cell}
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                  disabled={cell !== null}
                >
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
