import React, { useState } from "react";

function SearchBar({ onTagsChange, allTags, searchData }) {
  const [inputText, setInputText] = useState("");
  const [placeholder, setPlaceholder] = useState(
    "Suche nach der passenden Anlaufstelle"
  );

  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      const newInputText = inputText.trim();
      if (!newInputText || searchData.tags.includes(newInputText)) {
        return;
      }
      const newTags = [...searchData.tags, newInputText];
      setInputText("");
      setPlaceholder("Suche nach der passenden Anlaufstelle");
      setTimeout(() => onTagsChange(newTags, ""), 0);
    }
  };

  return (
    <div className="w-full mb-4 bg-fm_weiss">
      <div className="pt-4 max-w-screen-xl px-2 md:px-16 mx-auto">
        <h2 className="text-4xl md:my-8 font-bold text-fm_blau">
          Anlaufstellen
        </h2>
        {allTags.length > 0 && (
          <p className="mb-4 text-lg">
            Suche nach deiner passenden Anlaufstelle
          </p>
        )}

        <div className="w-full">
          <input
            type="text"
            className="w-full mb-2 md:mb-8 rounded-full border-2 bg-transparent placeholder-black"
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
