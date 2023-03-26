import React, { MouseEvent, FocusEvent, KeyboardEvent } from "react";
import { usePlayerContext } from "../PlayerContext";

interface EditablePlayerNameProps {
  playerNumber: 1 | 2;
}

const EditablePlayerName: React.FC<EditablePlayerNameProps> = ({
  playerNumber,
}) => {
  const { player1Name, setPlayer1Name, player2Name, setPlayer2Name } =
    usePlayerContext();

  // Establish the name and setName variables based on the playerNumber prop
  const name = playerNumber === 1 ? player1Name : player2Name;
  const setName = playerNumber === 1 ? setPlayer1Name : setPlayer2Name;

  const handleSave = (event: FocusEvent<HTMLDivElement>) => {
    setName(event.currentTarget.innerText);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
    }
  };

  const handleNameClick = (event: MouseEvent<HTMLDivElement>) => {
    const range = document.createRange();
    range.selectNodeContents(event.currentTarget);
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  return (
    <div
      className="playername"
      contentEditable
      onBlur={handleSave}
      onKeyDown={handleKeyDown}
      onClick={handleNameClick}
      suppressContentEditableWarning={true}
    >
      {name}
    </div>
  );
};

export default EditablePlayerName;
