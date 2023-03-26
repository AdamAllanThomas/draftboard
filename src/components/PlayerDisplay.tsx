import React from "react";
import EditablePlayerName from "./EditablePlayerName";
import PlayerStats from "./PlayerStats";
import { usePlayerContext } from "../PlayerContext";

export default function PlayerDisplay() {
  const { player1Stats, player2Stats } = usePlayerContext();

  return (
    <div className="playersrow">
      <div className="player-container">
        <EditablePlayerName playerNumber={1} />
        <PlayerStats {...player1Stats} />
      </div>
      <div className="player-container">
        <EditablePlayerName playerNumber={2} />
        <PlayerStats {...player2Stats} />
      </div>
    </div>
  );
}
