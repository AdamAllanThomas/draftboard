import React, { useState } from "react";
import Head from "./components/Head";
import GameBoard from "./components/GameBoard";
import PlayerDisplay from "./components/PlayerDisplay";
import "./styles.css";
import TopicGenerator from "./components/TopicGenerator";
import { PlayerContextProvider } from "./PlayerContext";
import draftTopics from "./data/moretopics.js";

export default function App() {
  const topics = draftTopics;
  const [topic, setTopic] = useState(
    topics[Math.floor(Math.random() * topics.length)]
  );

  const generateRandomTopic = () => {
    const randomIndex = Math.floor(Math.random() * topics.length);
    const randomTopic = topics[randomIndex];
    setTopic(randomTopic);
  };

  return (
    <div>
      <Head />
      <TopicGenerator topic={topic} generateRandomTopic={generateRandomTopic} />
      <PlayerContextProvider>
        <GameBoard generateRandomTopic={generateRandomTopic} />
        <PlayerDisplay />
      </PlayerContextProvider>
    </div>
  );
}
