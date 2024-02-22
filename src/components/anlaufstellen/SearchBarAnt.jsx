import React, { useState, useEffect } from "react";
import Tags from "../elements/Tags";
import { Select } from "antd";
import "./SearchBarAnt.css";

function SearchBarAnt(
  {
    // onTagsChange,
    // allTags,
    // addTagFromSuggestion,
    // searchData,
  }
) {
  // const options = [];

  // for (let i = 0; i < allTags.length; i++) {
  //   options.push({
  //     value: allTags[i],
  //     label: allTags[i],
  //   });
  // }

  // State für die ausgewählten Tags
  // const [selected, setSelected] = useState([]);

  // useEffect, um das `selected`-Array zu aktualisieren, wenn `searchData` geändert wird
  // useEffect(() => {
  //   // Hier kannst du die Logik implementieren, um `selected` basierend auf `searchData` zu aktualisieren.
  //   // Zum Beispiel:
  //   setSelected(searchData.tags);
  // }, [searchData]); // Der Effekt wird ausgelöst, wenn sich `searchData` ändert

  // const handleChangeTest = (value) => {
  //   setTimeout(() => onTagsChange(value, ""), 0);
  // };

  return (
    <div className="w-full mb-4 bg-fm_weiss">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="heading-koulen pt-12 mb-6">Anlaufstellen</h2>
        <p className="font-bold text-lg mb-4 px-6">
          Potenziell relevante Anlaufstellen im Kontext von Machtmissbrauch{" "}
        </p>
        <p className="max-w-screen-lg mx-auto pb-10 text-base px-6">
          <b>Disclaimer:</b> Projekt Vernetzung erhebt keinen Anspruch auf
          Vollständigkeit und stellt die eigene Auswahl an Anlaufstellen
          fortlaufend auf den Prüfstand. Falls wir aus deiner Sicht etwas
          vergessen haben, sind wir für konstruktive Anregungen und Ideen
          jederzeit dankbar.
        </p>
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
