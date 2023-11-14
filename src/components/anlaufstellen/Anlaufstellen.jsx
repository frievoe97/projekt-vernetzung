import React, { useState, useRef, useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import AnlaufstellenCard from "../elements/AnlaufstellenCard";
import yaml from "js-yaml";

function Anlaufstellen() {
  const { state, dispatch } = useGlobalState(); // Zugriff auf den globalen Zustand und den Dispatch
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTags, setSearchTags] = useState([]);
  const [placeholder, setplaceholder] = useState(
    "Suche Anlaufstelle oder Tag..."
  );

  // Erstelle ein Array mit den Suchkriterien
  const searchCriteria = [...searchTags.map((tag) => tag.toLowerCase())];

  // Füge searchTerm zu den Suchkriterien hinzu, wenn es nicht leer ist
  if (searchTerm.trim() !== "") {
    searchCriteria.push(searchTerm.toLowerCase());
  }

  const filteredAnlaufstellen = state.anlaufstellenData.filter(
    (anlaufstelle) => {
      // Prüfen, ob mindestens ein Suchkriterium vorhanden ist
      const hasSearchCriteria = searchCriteria.length > 0;

      // Prüfen, ob die Anlaufstelle alle Suchkriterien enthält
      const matchesSearchCriteria =
        hasSearchCriteria &&
        searchCriteria.every(
          (criteria) =>
            anlaufstelle.description.toLowerCase().includes(criteria) ||
            anlaufstelle.name.toLowerCase().includes(criteria) ||
            anlaufstelle.tags.some((tag) =>
              tag.toLowerCase().includes(criteria)
            )
        );

      // Nur Anlaufstellen beibehalten, die alle Suchkriterien erfüllen
      return hasSearchCriteria ? matchesSearchCriteria : true;
    }
  );

  const exampleTags = ["Telefon", "Berlin", "Online"];

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm) {
      setSearchTags((prev) => [...prev, searchTerm]);
      setSearchTerm("");
      setplaceholder("");
    }
  };

  const removeTag = (index) => {
    const newTags = [...searchTags];
    newTags.splice(index, 1);
    setSearchTags(newTags);

    if (searchTags.length >= 1) {
      setplaceholder("Suche Anlaufstelle oder Tag...");
    } else {
      setplaceholder("");
    }
  };

  const tagsRef = useRef(null);

  // Currently not working...
  useEffect(() => {
    if (tagsRef.current && searchTags.length > 0) {
      const width = window.getComputedStyle(tagsRef.current).width;
      tagsRef.current.style.paddingLeft = `${width + 200}px`; // 16px for some spacing
    } else if (tagsRef.current) {
      tagsRef.current.style.paddingLeft = "16px"; // reset to default padding
    }
  }, [searchTags]);

  const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        // console.log(parsedData);
        dispatch({
          type: actionType,
          payload: parsedData[dataKey], // Verwenden Sie den übergebenen dataKey als Schlüssel
        });
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/anlaufstellenData.yaml",
      dispatch,
      "SET_ANLAUFSTELLEN_DATA",
      "anlaufstellenData" // Übergeben Sie den Namen des Schlüssels
    );
  }, [dispatch]);

  return (
    <div className="p-6 text-center z-0 bg-transparent text-color_font">
      <h1 className="text-4xl font-bold mt-8 mb-6">Anlaufstellen</h1>
      <div className="max-w-2xl mx-auto mb-8 relative">
        <div className="flex items-center border-2 border-black p-4 rounded-md w-full relative">
          <div className="flex items-center space-x-2">
            {searchTags.map((tag, index) => (
              <span
                key={index}
                className="pl-2 bg-gray-200 rounded-2xl text-sm flex items-center"
              >
                {tag}
                <button
                  onClick={() => removeTag(index)}
                  className="px-2 py-1 ml-2 rounded-2xl text-gray-400 hover:text-gray-500 focus:outline-none z-0"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            placeholder={
              searchTags.length ? "" : "Suche Anlaufstelle oder Tag..."
            }
            className="grow z-0 relative bg-transparent border-none border-transparent outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="flex flex-row max-w-2xl mx-auto mb-8">
        <p className="mr-3"> Suche nach Stichwörtern wie...</p>
        <div className="flex flex-wrap">
          {exampleTags.map((tag) => (
            <span
              key={tag}
              className="bg-transparent rounded-full px-3 py-1 text-sm text-color_font mr-2 border-2 border-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-full mx-auto flex flex-wrap justify-center gap-8 ">
        {filteredAnlaufstellen.map((anlaufstelle) => (
          <AnlaufstellenCard
            key={anlaufstelle.id}
            anlaufstelle={anlaufstelle}
          />
        ))}
      </div>
    </div>
  );
}

export default Anlaufstellen;
