import React, { MouseEvent, FocusEvent, KeyboardEvent } from "react";

interface TopicGeneratorProps {
  topic: string;
  generateRandomTopic: () => void;
}

const TopicGenerator: React.FC<TopicGeneratorProps> = ({
  topic,
  generateRandomTopic,
}) => {
  const handleTopicChange = (event: FocusEvent<HTMLDivElement>) => {
    // You may want to handle changes in the parent component if needed
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
