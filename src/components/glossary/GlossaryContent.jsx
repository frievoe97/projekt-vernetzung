import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import yaml from "js-yaml";

function GlossaryContent() {
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
    <div className="p-0 md:p-6 text-center z-0 bg-fm_weiss text-color_font">
      {state.glossaryPageData.glossaryData && (
        <div className="grid text-left gap-0 mx-auto px-0 md:px-6 lg:px-8 max-w-screen-xl my-0 md:my-16">
          {state.glossaryPageData.glossaryData.map((item, index) => {
            return (
              <GlossaryItem
                key={index}
                term={item.term}
                definition={item.definition}
                searchTerm={searchTerm}
                data={item}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function GlossaryItem({ term, definition, searchTerm, data }) {
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
    <div className="p-4 md:p-6 border-b-2 border-black">
      <div
        className={`p-1 flex rounded justify-between items-center ${
          isExpanded ? "shadow-xl bg-fm_helles_beige " : ""
        }`}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <h2 className="text-2xl font-semibold my-2 ml-2">{term}</h2>
        <button className="bg-transparent">
          <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleLeft} />
        </button>
      </div>
      <section className="divide-y-2 divide-fm_grau" {...getCollapseProps()}>
        {data.definition.map((data, index) => (
          <div key={index} className="my-4 mb-4">
            <h2 className="font-bold text-fm_blau mt-2 mb-2">{data.title}</h2>
            <p className="mb-2 text-justify">{data.text}</p>
            <a>Weiterlesen</a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default GlossaryContent;
