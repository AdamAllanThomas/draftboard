import React, { useState, MouseEvent, FocusEvent, KeyboardEvent } from "react";
import draftTopics from "../data/moretopics.js";

interface TopicGeneratorProps {}

const TopicGenerator: React.FC<TopicGeneratorProps> = () => {
  const topics = draftTopics;
  const [topic, setTopic] = useState(
    topics[Math.floor(Math.random() * topics.length)]
  );

  const generateRandomTopic = () => {
    const randomIndex = Math.floor(Math.random() * topics.length);
    const randomTopic = topics[randomIndex];
    setTopic(randomTopic);
  };

  const handleTopicChange = (event: FocusEvent<HTMLDivElement>) => {
    setTopic(event.currentTarget.innerText);
  };

  const handleTopicClick = (event: MouseEvent<HTMLDivElement>) => {
    const range = document.createRange();
    range.selectNodeContents(event.currentTarget);
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents adding a newline character
      event.currentTarget.blur(); // Removes focus from the div, triggering handleTopicChange
    }
  };

  return (
    <div className="topic-generator">
      <div
        className="topic"
        contentEditable
        onBlur={handleTopicChange}
        onClick={handleTopicClick}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
      >
        {topic}
      </div>
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
