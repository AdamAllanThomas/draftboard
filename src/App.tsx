import React from "react";
import Head from "./components/Head";
import GameBoard from "./components/GameBoard";
import PlayerDisplay from "./components/PlayerDisplay";
import "./styles.css";
import Topic from "./components/TopicGenerator";
import { PlayerContextProvider } from "./PlayerContext";

export default function App() {
  return (
    <div>
      <Head />
      <Topic />
      <PlayerContextProvider>
        <GameBoard />
        <PlayerDisplay />
      </PlayerContextProvider>
    </div>
  );
}
