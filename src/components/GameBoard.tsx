import React, { useState, useEffect, useCallback } from "react";
import { usePlayerContext } from "../PlayerContext";

interface DraftBoardProps {
  generateRandomTopic: () => void;
}

const DraftBoard: React.FC<DraftBoardProps> = ({ generateRandomTopic }) => {
  const [player1Picks, setPlayer1Picks] = useState<string[]>([""]);
  const [player2Picks, setPlayer2Picks] = useState<string[]>([""]);
  const [currentRound, setCurrentRound] = useState(0);

  const {
    player1Name,
    player2Name,
    setPlayer1Stats,
    setPlayer2Stats,
    player1Stats,
    player2Stats,
  } = usePlayerContext();

  const handleInputChange = (
    playerIndex: number,
    round: number,
    value: string
  ) => {
    if (playerIndex === 1) {
      const newPicks = [...player1Picks];
      newPicks[round] = value;
      setPlayer1Picks(newPicks);
    } else if (playerIndex === 2) {
      const newPicks = [...player2Picks];
      newPicks[round] = value;
      setPlayer2Picks(newPicks);
    }
  };

  const renderPicks = () => {
    const picks = [];
    for (let i = 0; i <= currentRound; i++) {
      picks.push(
        <div className="draft-row" key={i}>
          <div className="player1-pick">
            <input
              type="text"
              value={player1Picks[i]}
              onChange={(e) => handleInputChange(1, i, e.target.value)}
            />
          </div>
          <div className="player2-pick">
            <input
              type="text"
              value={player2Picks[i]}
              onChange={(e) => handleInputChange(2, i, e.target.value)}
            />
          </div>
        </div>
      );
    }
    return picks;
  };

  const handleNextRound = useCallback(() => {
    setCurrentRound((prevRound) => prevRound + 1);
    setPlayer1Picks((prevPicks) => [...prevPicks, ""]);
    setPlayer2Picks((prevPicks) => [...prevPicks, ""]);
  }, []);

  useEffect(() => {
    if (
      currentRound === player1Picks.length - 1 &&
      player1Picks[currentRound].trim() !== "" &&
      player2Picks[currentRound].trim() !== ""
    ) {
      handleNextRound();
    }
  }, [player1Picks, player2Picks, currentRound, handleNextRound]);

  const handleGameOver = (playerIndex: number) => {
    if (playerIndex === 1) {
      setPlayer1Stats({
        ...player1Stats,
        wins: player1Stats.wins + 1,
      });
      setPlayer2Stats({
        ...player2Stats,
        losses: player2Stats.losses + 1,
      });
    } else if (playerIndex === 2) {
      setPlayer2Stats({
        ...player2Stats,
        wins: player2Stats.wins + 1,
      });
      setPlayer1Stats({
        ...player1Stats,
        losses: player1Stats.losses + 1,
      });
    }
    resetBoard();
    generateRandomTopic();
  };

  const resetBoard = () => {
    setPlayer1Picks([""]);
    setPlayer2Picks([""]);
    setCurrentRound(0);
  };

  return (
    <div className="draft-board">
      <div className="draft-body">{renderPicks()}</div>
      <div className="draft-footer">
        <button onClick={() => handleGameOver(1)}>{player1Name} wins!</button>
        <button onClick={() => handleGameOver(2)}>{player2Name} wins!</button>
      </div>
    </div>
  );
};

export default DraftBoard;
