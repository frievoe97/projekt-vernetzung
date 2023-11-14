import React, { useState, useEffect } from "react";
import Tags from "../elements/Tags";
import { Select } from "antd";
import "./SearchBarAnt.css";

function SearchBarAnt({
  onTagsChange,
  allTags,
  addTagFromSuggestion,
  searchData,
}) {
  const options = [];

  for (let i = 0; i < allTags.length; i++) {
    options.push({
      value: allTags[i],
      label: allTags[i],
    });
  }

  // State für die ausgewählten Tags
  const [selected, setSelected] = useState([]);

  // useEffect, um das `selected`-Array zu aktualisieren, wenn `searchData` geändert wird
  useEffect(() => {
    // Hier kannst du die Logik implementieren, um `selected` basierend auf `searchData` zu aktualisieren.
    // Zum Beispiel:
    setSelected(searchData.tags);
  }, [searchData]); // Der Effekt wird ausgelöst, wenn sich `searchData` ändert

  const handleChangeTest = (value) => {
    setTimeout(() => onTagsChange(value, ""), 0);
  };

  return (
    <div className="w-full mb-4 bg-fm_weiss">
      <div className="pt-4 max-w-screen-xl px-2 md:px-16 mx-auto">
        <h2 className="text-4xl md:my-8 font-bold text-fm_blau pb-12">
          Anlaufstellen
        </h2>
        {/* <p className="pb-12 text-lg">
          Suche nach deiner passenden Anlaufstelle
        </p> */}
        {/* {allTags.length > 0 && (
          <p className="mb-4 text-lg">
            Suche nach deiner passenden Anlaufstelle
          </p>
        )} */}
        {/* <div className="w-full">
          <Select
            mode="tags"
            value={selected}
            style={{
              width: "100%",
              marginBottom: "2rem",
            }}
            placeholder="Suche nach deiner passenden Anlaufstelle..."
            onChange={handleChangeTest}
            options={options}
          />
        </div> */}
      </div>
    </div>
  );
}

export default SearchBarAnt;
