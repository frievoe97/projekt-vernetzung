import React, { useState, useEffect } from "react";
import Tags from "../elements/Tags";

function SearchBar({ onTagsChange, allTags, addTagFromSuggestion }) {
  const [currentTags, setCurrentTags] = useState([]);
  const [inputText, setInputText] = useState("");
  const [placeholder, setPlaceholder] = useState(
    "Suche nach der passenden Anlaufstelle"
  );

  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
    setTimeout(() => onTagsChange(currentTags, value), 0);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      const newInputText = inputText.trim();
      if (!newInputText || currentTags.includes(newInputText)) {
        return;
      }
      const newTags = [...currentTags, newInputText];
      setCurrentTags(newTags);
      setInputText("");
      setPlaceholder("");
      setTimeout(() => onTagsChange(newTags, ""), 0);
    }
  };

  useEffect(() => {
    onTagsChange(currentTags, null);
  }, [currentTags]);

  return (
    <div className="w-full bg-fm_weiss mb-4">
      <div className="pt-4 max-w-screen-xl px-2 md:px-16 mx-auto">
        <h2 className="text-xl md:my-8 font-bold">
          Finde die passende Anlaufstelle!
        </h2>
        {allTags.length > 0 && (
          <p className="mb-4">
            Suche nach einem oder mehreren dieser Schlagwörter
          </p>
        )}
        <div className="flex flex-wrap pb-4">
          {allTags.map((tag, index) => (
            <div
              key={index}
              className={`${
                index >= 5 ? "hidden md:flex" : "flex"
              } items-center mr-2 mb-2`}
            >
              <Tags
                tag={tag}
                removable={false}
                onClickTag={() => addTagFromSuggestion(tag)}
              />
            </div>
          ))}
        </div>

        <div className="w-full">
          <input
            type="text"
            className="w-full mb-0 md:mb-8 rounded-full"
            placeholder={placeholder}
            value={inputText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
