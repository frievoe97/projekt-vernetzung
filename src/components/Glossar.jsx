import React, { useState, useEffect } from "react";
import { useGlobalState } from "../data/GlobalState";
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import yaml from "js-yaml";

function Glossary() {
  const { state, dispatch } = useGlobalState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(state.glossaryData);

  const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        dispatch({
          type: actionType,
          payload: parsedData[dataKey], // Verwenden Sie den übergebenen dataKey als Schlüssel
        });
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/glossaryData.yaml",
      dispatch,
      "SET_GLOSSAR_DATA",
      "glossaryData"
    );
  }, [dispatch]);

  useEffect(() => {
    // Filtere die Elemente basierend auf dem Suchbegriff
    const filtered = state.glossaryData.filter((item) =>
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, state.glossaryData]);

  return (
    <div className="p-4 md:p-6 text-center z-0 bg-color_4">
      <h1 className="text-4xl font-bold mt-8 mb-6">Glossar</h1>
      <input
        type="text"
        placeholder="Suche nach Begriffen..."
        className="w-full px-4 py-2 mb-0 rounded-lg mx-auto md:px-6 lg:px-8 max-w-screen-xl my-16"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <div className="grid text-left gap-0 md:gap-6 mx-auto px-0 md:px-6 lg:px-8 max-w-screen-xl my-4 md:my-16">
        {filteredItems.map((item, index) => (
          <GlossaryItem
            key={index}
            term={item.term}
            definition={item.definition}
            searchTerm={searchTerm}
          />
        ))}
      </div>
    </div>
  );
}

function GlossaryItem({ term, definition, searchTerm }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [expanded, setExpanded] = useState(false); // Standardmäßig zugeklappt

  //   Überprüfe, ob ein Suchbegriff vorhanden ist und setze "expanded" entsprechend
  useEffect(() => {
    if (searchTerm) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [searchTerm]);

  return (
    <div className="p-6 border-b-2 border-black">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{term}</h2>
        <button
          {...getToggleProps({
            onClick: () => setExpanded(!expanded),
          })}
        >
          <FontAwesomeIcon icon={expanded ? faAngleDown : faAngleLeft} />
        </button>
      </div>
      <section {...getCollapseProps()}>
        {isExpanded && (
          <p className="text-gray-600 text-justify">{definition}</p>
        )}
      </section>
    </div>
  );
}

export default Glossary;
