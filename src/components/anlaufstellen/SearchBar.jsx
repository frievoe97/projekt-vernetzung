import React, { useState } from "react";
import Tags from "../elements/Tags";

/**
 * Die `SearchBar`-Komponente ermöglicht die Eingabe von Suchbegriffen und Tags zur Filterung von Anlaufstellen.
 *
 * @param {object} props - Die Eigenschaften (props) der Komponente.
 * @param {function} props.onTagsChange - Eine Callback-Funktion, die aufgerufen wird, wenn sich die ausgewählten Tags ändern.
 * @param {array} props.allTags - Eine Liste aller verfügbaren Tags.
 * @param {function} props.addTagFromSuggestion - Eine Callback-Funktion zum Hinzufügen von Tags aus Vorschlägen.
 * @param {object} props.searchData - Die aktuellen Suchdaten, einschließlich ausgewählter Tags und Suchtext.
 * @param {array} props.searchData.tags - Eine Liste der ausgewählten Tags.
 * @param {string} props.searchData.inputText - Der aktuelle Suchtext.
 * @returns {JSX.Element} - Die gerenderte `SearchBar`-Komponente.
 */
function SearchBar({
  onTagsChange,
  allTags,
  addTagFromSuggestion,
  searchData,
}) {
  // Zustand für die Eingabe des Suchtexts
  const [inputText, setInputText] = useState("");
  // Zustand für den Platzhaltertext im Eingabefeld
  const [placeholder, setPlaceholder] = useState(
    "Suche nach der passenden Anlaufstelle"
  );

  /**
   * Handler-Funktion, die aufgerufen wird, wenn sich der Wert im Eingabefeld ändert.
   *
   * @param {object} event - Das Ereignisobjekt des Input-Feldes.
   */
  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  /**
   * Handler-Funktion, die aufgerufen wird, wenn eine Taste gedrückt wird.
   * Wenn Enter oder Komma gedrückt wird, wird ein Tag hinzugefügt.
   *
   * @param {object} event - Das Ereignisobjekt der Tastatureingabe.
   */
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      const newInputText = inputText.trim();
      if (!newInputText || searchData.tags.includes(newInputText)) {
        return;
      }
      const newTags = [...searchData.tags, newInputText];
      setInputText("");
      setPlaceholder("Suche nach der passenden Anlaufstelle");
      // Verzögerte Ausführung der `onTagsChange`-Funktion, um das Hinzufügen des Tags im UI abzuschließen
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
        {/* <div className="flex flex-wrap pb-4">
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
        </div> */}

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
