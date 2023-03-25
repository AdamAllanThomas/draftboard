import React from "react";

interface PlayerStatsProps {
  wins: number;
  losses: number;
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ wins, losses }) => {
  return (
    <div className="player-stats">
      <span className="wins">Wins: {wins}</span>
      <span className="losses">Losses: {losses}</span>
    </div>
  );
};

export default PlayerStats;
