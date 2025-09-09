import { useState } from "react";

export default function Player({ player, isAvtive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(player.name);
  function editPlayerName() {
    setIsEditing((editing) => !editing);
    player.name = name;
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <li className={isAvtive ? "active" : ""}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input
            type="text"
            required
            value={name}
            onChange={handleNameChange}
          />
        )}
        <span className="player-symbol">{player.symbol}</span>
        <button onClick={editPlayerName}>{!isEditing ? "Edit" : "Save"}</button>
      </span>
    </li>
  );
}
