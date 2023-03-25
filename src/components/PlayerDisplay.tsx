import React from "react";
import EditablePlayerName from "./EditablePlayerName";
import PlayerStats from "./PlayerStats";
import { usePlayerContext } from "../PlayerContext";

export default function PlayerDisplay() {
  const { player1Name, setPlayer1Name, player2Name, setPlayer2Name, player1Stats, player2Stats } = usePlayerContext();

  return (
    <div className="playersrow">
      <div className="player-container">
        <EditablePlayerName defaultName={player1Name} onSave={setPlayer1Name} />
        <PlayerStats {...player1Stats} />
      </div>
      <div className="player-container">
        <EditablePlayerName defaultName={player2Name} onSave={setPlayer2Name} />
        <PlayerStats {...player2Stats} />
      </div>
    </div>
  );
}
