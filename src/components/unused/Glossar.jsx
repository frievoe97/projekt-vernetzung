import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import yaml from "js-yaml";

function Glossary() {
  const { state, dispatch } = useGlobalState();
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        dispatch({
          type: actionType,
          payload: parsedData, // Verwenden Sie den übergebenen dataKey als Schlüssel
        });
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/glossaryPageData.yaml",
      dispatch,
      "SET_GLOSSAR_DATA",
      "glossaryPageData"
    );
  }, [dispatch]);

  return (
    // Kommentar früher: bg-color_4 jetzt: bg-gradient-to-r from-color_2 via-color_3 to-color_4
    <div className="p-4 md:p-6 text-center z-0 bg-transparent text-color_font">
      <h1 className="text-4xl font-bold mt-8 mb-6">
        {state.glossaryPageData.header}
      </h1>
      <p className="text-lg my-4">{state.glossaryPageData.subheader}</p>
      <div className="px-6">
        <input
          type="text"
          placeholder="Suche nach Begriffen..."
          className="w-full px-4 py-2 mb-0 rounded-lg mx-auto md:px-6 lg:px-8 max-w-screen-xl md:my-16 border-2 border-black bg-transparent placeholder-color_font_light"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      {state.glossaryPageData.glossaryData && (
        <div className="grid text-left gap-0 md:gap-6 mx-auto px-0 md:px-6 lg:px-8 max-w-screen-xl my-4 md:my-16">
          {state.glossaryPageData.glossaryData.map((item, index) => {
            // Überprüfen Sie hier, ob das Element den Suchbegriff enthält
            if (
              item.definition.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return (
                <GlossaryItem
                  key={index}
                  term={item.term}
                  definition={item.definition}
                  searchTerm={searchTerm}
                />
              );
            }
            // Wenn das Element den Suchbegriff nicht enthält, überspringen Sie es
            return null;
          })}
        </div>
      )}
    </div>
  );
}

function GlossaryItem({ term, definition, searchTerm }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => {
    if (searchTerm.length >= 3) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [searchTerm]);

  const highlightSearchTerm = (text) => {
    // Falls searchTerm vorhanden ist, hebe es im Text hervor
    if (searchTerm.length >= 3) {
      const regex = new RegExp(`(${searchTerm})`, "gi");
      return text.replace(regex, "<strong>$1</strong>");
    }
    return text;
  };

  return (
    <div className="p-6 border-b-2 border-black">
      <div
        className="flex justify-between items-center"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <h2 className="text-2xl font-semibold mb-2">{term}</h2>
        <button className="bg-transparent">
          <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleLeft} />
        </button>
      </div>
      <section {...getCollapseProps()}>
        <p
          className="text-justify"
          dangerouslySetInnerHTML={{
            __html: highlightSearchTerm(definition),
          }}
        />
      </section>
    </div>
  );
}

export default Glossary;
