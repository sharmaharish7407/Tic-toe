import { useState } from "react"

export default function Players({ initalName, symbol, isActive, onChangeName }) {
  const [isEditing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initalName);

  function handleEditClick() {
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
    setEditing((prev) => !prev);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input value={playerName} onChange={handleChange} />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}