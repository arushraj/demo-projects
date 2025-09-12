import { useRef, useState } from "react";
export default function Player() {
  const playerNameRef = useRef();
  const [playerName, setPlayerName] = useState("Guest");
  function handleSave() {
    setPlayerName(playerNameRef.current.value);
    playerNameRef.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" ref={playerNameRef} required />
        <button onClick={handleSave}>Set Name</button>
      </p>
    </section>
  );
}
