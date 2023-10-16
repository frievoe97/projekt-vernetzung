import React, { useState, useEffect } from "react";
import { useGlobalState } from "../data/GlobalState";
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Glossary() {
  const { state } = useGlobalState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(state.glossaryData);

  useEffect(() => {
    // Filtere die Elemente basierend auf dem Suchbegriff
    const filtered = state.glossaryData.filter((item) =>
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, state.glossaryData]);

  return (
    <div className="p-6 text-center z-0 bg-yellow">
      <h1 className="text-4xl font-bold mt-8 mb-6">Glossar</h1>
      <input
        type="text"
        placeholder="Suche nach Begriffen..."
        className="w-full px-4 py-2 mb-4 rounded-lg mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl my-16"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <div className="grid text-left gap-6 mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl my-16">
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

  // Überprüfe, ob ein Suchbegriff vorhanden ist und setze "expanded" entsprechend
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
        {isExpanded && <p className="text-gray-600">{definition}</p>}
      </section>
    </div>
  );
}

export default Glossary;
