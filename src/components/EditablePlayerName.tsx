import React, { useState, ChangeEvent, KeyboardEvent } from "react";

interface EditablePlayerNameProps {
  defaultName: string;
  onSave: (name: string) => void;
}

const EditablePlayerName: React.FC<EditablePlayerNameProps> = ({
  defaultName,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>(defaultName);

  const handleSave = () => {
    setIsEditing(false);
    onSave(name);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={name}
        className="editableplayername"
        onChange={handleChange}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        autoFocus
        style={{
          width: "100%",
          height: "40px",
          boxSizing: "border-box",
          padding: "4px",
        }}
      />
    );
  } else {
    return (
      <span className="playername" onClick={() => setIsEditing(true)}>
        {name}
      </span>
    );
  }
};

export default EditablePlayerName;
