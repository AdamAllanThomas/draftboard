import React, { useState } from "react";
import draftTopics from "../data/topics.js";

const TopicGenerator = () => {
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
    <div className="topic-generator">
      <div className="topic">{topic}</div>
      <button
        className="generate-topic-button"
        onClick={() => generateRandomTopic()}
      >
        New Topic
      </button>
    </div>
  );
};

export default TopicGenerator;
