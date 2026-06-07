import { useState } from "react"

export default function Players({ playerName, symbol,isActive }) {
  const [isEditing, setEditing] = useState(false);
  const [players, setPlayers] = useState(false);
  function handleEditClick() {
    setEditing((isEditing) => !isEditing)
  }
  let player = <span className="player-name">{players}</span>;
  if (isEditing) {
    player = <input type="text" required value={players}  onChange={handleChange} />;

  }
function handleChange(e){
setPlayers(e.target.value)
}
  return (

    <>
        <li className={isActive?'active':undefined}>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    </>
  )
}