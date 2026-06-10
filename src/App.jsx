import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/Players";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winnig-combination";
import GameOver from "./GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = initialGameBoard.map((row) => [...row]);

  for (const turn of gameTurns) {
    const { row, col } = turn.square;
    gameBoard[row][col] = turn.player;
  }

  let winner;

  for (const combo of WINNING_COMBINATIONS) {
    const a = gameBoard[combo[0].row][combo[0].col];
    const b = gameBoard[combo[1].row][combo[1].col];
    const c = gameBoard[combo[2].row][combo[2].col];

    if (a && a === b && a === c) {
      winner = players[a];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prev) => {
      const currentPlayer = derivedActivePlayer(prev);

      const updated = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prev,
      ];

      return updated;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prev) => ({
      ...prev,
      [symbol]: newName,
    }));
  }

  return (
    <main>
      <div className="game-container">

        <ol className="highlight-player">
          <Players
            initalName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />

          <Players
            initalName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}

        <GameBoard
          board={gameBoard}
          onSelectSquare={handleSelectSquare}
        />

      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;