import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import AnlaufstellenContentNetflix from "./AnlaufstellenContentNetflix";
import AnlaufstellenContentGrid from "./AnlaufstellenContentGrid";
import SearchBar from "./SearchBar";
import SearchBarAnt from "./SearchBarAnt";

/**
 * Hauptkomponente für die Anlaufstellen-V2-Seite.
 */
function Anlaufstellen_V2() {
  // Verwende die 'useGlobalState'-Hook, um auf den globalen Zustand zuzugreifen
  const { state, dispatch } = useGlobalState();

  // Definiere den Zustand 'searchData' mit Standardwerten für Tags und Eingabetext
  const [searchData, setSearchData] = useState({ tags: [], inputText: "" });

  // Definiere den Zustand 'allTags' für alle eindeutigen Tags aus den Daten
  const [allTags, setAllTags] = useState([]);

  /**
   * Holt Daten aus einer YAML-Datei und aktualisiert den globalen Zustand.
   * @param {string} url - Die URL zur YAML-Datei.
   * @param {function} dispatch - Die Dispatch-Funktion aus dem globalen Zustand.
   * @param {string} actionType - Der Typ der Aktion zum Aktualisieren des Zustands.
   */
  const fetchAndParseYamlData = (url, dispatch, actionType) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        // Parst die YAML-Daten mit 'js-yaml' und aktualisiert den globalen Zustand
        const parsedData = yaml.load(yamlText);
        console.log(parsedData);
        dispatch({
          type: actionType,
          payload: parsedData,
        });
      });
  };

  /**
   * Behandelt Änderungen an den Tags und dem Eingabetext.
   * @param {array} tags - Die ausgewählten Tags.
   * @param {string} inputText - Der eingegebene Text.
   */
  const handleTagsChange = (tags, inputText) => {
    // Aktualisiert den Zustand 'searchData' mit den neuen Tags und dem Text
    setSearchData({ tags, inputText });
  };

  /**
   * Entfernt ein Tag aus dem aktuellen 'searchData'.
   * @param {string} tag - Das zu entfernende Tag.
   */
  const removeTag = (tag) => {
    // Filtert das Tag aus dem aktuellen Zustand 'searchData' und aktualisiert ihn
    const filteredArray = searchData.tags.filter(
      (element) => element.toLowerCase() !== tag.toLowerCase()
    );

    setSearchData({ tags: filteredArray, inputText: "" });
    console.log("Updated Tags ", filteredArray);
  };

  /**
   * Fügt ein Tag aus der Vorschlagsliste zum aktuellen 'searchData' hinzu.
   * @param {string} tag - Das hinzuzufügende Tag.
   */
  const addTagFromSuggestion = (tag) => {
    // Erstellt ein neues Array mit dem hinzuzufügenden Tag und aktualisiert den Zustand
    const newTags = [...searchData.tags, tag];
    setSearchData({ tags: newTags, inputText: "" });
  };

  // Wenn 'searchData' sich ändert, führe useEffect aus
  //   useEffect(() => {
  //     console.log("searchData has changed:", searchData);
  //   }, [searchData]);

  // Lade die Daten aus der YAML-Datei, wenn die Komponente montiert wird
  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/anlaufstellenData.yaml",
      dispatch,
      "SET_ANLAUFSTELLEN_DATA"
    );
  }, [dispatch]);

  // Erstelle eine Liste eindeutiger Tags aus den Daten und aktualisiere 'allTags'
  useEffect(() => {
    const createUniqueTagsList = (data) => {
      const tagsSet = new Set();

      const extractTags = (array) => {
        array.forEach((item) => {
          if (item.Name && Array.isArray(item.Name)) {
            item.Name.forEach((tags) => {
              tags.Tags.forEach((tag) => {
                if (tag === "Kategorie" || tag === "Name") return;
                tagsSet.add(tag);
              });
            });
          }
        });
      };

      if (
        data.anlaufstellenData.googleDoc &&
        Array.isArray(data.anlaufstellenData.googleDoc)
      ) {
        extractTags(data.anlaufstellenData.googleDoc);
      }

      setAllTags(Array.from(tagsSet));
    };

    // Wenn 'state.anlaufstellenData' verfügbar ist, rufe 'createUniqueTagsList' auf
    if (state.anlaufstellenData) {
      createUniqueTagsList(state);
    }
  }, [state.anlaufstellenData]);

  return (
    <div className="text-center text-color_font mt-0 pt-16 bg-fm_helles_beige">
      {/* Rendere die Suchleiste und übergebe die entsprechenden Funktionen und Daten */}
      {/* <SearchBar
        onTagsChange={handleTagsChange}
        allTags={allTags}
        searchData={searchData}
        addTagFromSuggestion={addTagFromSuggestion}
      /> */}

      <SearchBarAnt
        onTagsChange={handleTagsChange}
        allTags={allTags}
        searchData={searchData}
        addTagFromSuggestion={addTagFromSuggestion}
      />

      {/* Rendere den Inhalt basierend auf searchData */}
      {searchData.tags != undefined &&
      searchData.tags.length === 0 &&
      (searchData.inputText == "" || searchData.inputText == null) ? (
        <AnlaufstellenContentNetflix />
      ) : (
        <AnlaufstellenContentGrid
          searchData={searchData}
          onTagsChange={removeTag}
        />
      )}
    </div>
  );
}

export default Anlaufstellen_V2;
