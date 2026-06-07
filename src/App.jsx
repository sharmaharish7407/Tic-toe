import { useContext, useState } from "react"
import GameBoard from "./components/GameBoard"
import Players from "./components/Players"
import Log from "./components/Log";
import { Theme } from "./main";
import { useCallback } from "react"

function App() {
const[activePlayer,setActivePlayer] = useState("X");
  const { theme, setTheme } = useContext(Theme)


const [gameTurns,setGameTurns]=useState([])


  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

const handleSelectSquare = useCallback((rowIndex, colIndex) => {
  console.log("clicked")

  setActivePlayer((cur) => (cur === "X" ? "0" : "X"))

  setGameTurns((prevTurns) => {
    const currentPlayer =
      prevTurns.length > 0 && prevTurns[0].player === "X" ? "0" : "X"

    const updatedTurns = [
      {
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer,
      },
      ...prevTurns,
    ]

    return updatedTurns
  })
}, [rowIndex,colIndex])
return (
    <>
      <main>
      <button onClick={toggleTheme}>
        Switch Theme
      </button>
          <div className={theme === "dark" ? "dark-theme" : "light-theme"}>

        <div className="game-container">
          <ol id="palyers" className="highlight-player">
  <Players  playerName="Player 1" symbol="X"  isActive={activePlayer==='X'}/>
  <Players  playerName="Player 2"  symbol="0" isActive={activePlayer==='0'}/>
      </ol> 
              <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
       </div>
       </div>
       <Log turns={gameTurns}/>
      </main>
    </>
  )
}
export default App