import React, { createContext, useContext, useState } from "react";

interface PlayerContextProps {
  player1Name: string;
  setPlayer1Name: (name: string) => void;
  player2Name: string;
  setPlayer2Name: (name: string) => void;
  player1Stats: { wins: number; losses: number };
  setPlayer1Stats: (stats: { wins: number; losses: number }) => void;
  player2Stats: { wins: number; losses: number };
  setPlayer2Stats: (stats: { wins: number; losses: number }) => void;
}

const PlayerContext = createContext<PlayerContextProps | null>(null);

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (context === null) {
    throw new Error(
      "usePlayerContext must be used within a PlayerContextProvider"
    );
  }
  return context;
};

export const PlayerContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [player1Name, setPlayer1Name] = useState<string>("Player 1");
  const [player2Name, setPlayer2Name] = useState<string>("Player 2");
  const [player1Stats, setPlayer1Stats] = useState({ wins: 0, losses: 0 });
  const [player2Stats, setPlayer2Stats] = useState({ wins: 0, losses: 0 });

  return (
    <PlayerContext.Provider
      value={{
        player1Name,
        setPlayer1Name,
        player2Name,
        setPlayer2Name,
        player1Stats,
        setPlayer1Stats,
        player2Stats,
        setPlayer2Stats,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
