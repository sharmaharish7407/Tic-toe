


export default function GameBoard({onSelectSquare,board}) {


//   const [gameBoard,setGameBoard]=  useState(initialGameBoard)

//   function handleSelectSquare(rowIndex,colIndex){
// setGameBoard((prevBoard)=>{
//     const updatedBoard=[...prevBoard.map((inner)=>{
//  return[...inner]
//     })]

//     updatedBoard[rowIndex][colIndex]=activePlayerSymbol;

//     return updatedBoard
// })
// onSelectSquare()
//   }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        
        return(

        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button  onClick={()=>onSelectSquare(rowIndex,colIndex)}  disabled={playerSymbol  !==null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      )})}
    </ol>
  );
}