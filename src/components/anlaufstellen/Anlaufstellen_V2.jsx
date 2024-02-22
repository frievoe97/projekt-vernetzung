import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import AnlaufstellenContentNetflix from "./AnlaufstellenContentNetflix";
import AnlaufstellenContentGrid from "./AnlaufstellenContentGrid";
import SearchBar from "./SearchBar";
import SearchBarAnt from "./SearchBarAnt";
import Filter from "./Filter";

import { getAnlaufstellen } from "../../client";

/**
 * Hauptkomponente für die Anlaufstellen-V2-Seite.
 */
function Anlaufstellen_V2() {
  // Verwende die 'useGlobalState'-Hook, um auf den globalen Zustand zuzugreifen
  const { state, dispatch } = useGlobalState();

  function getTitleByValue(targetValue) {
    for (let i = 0; i < values.length; i++) {
      if (values[i].value === targetValue) {
        return { title: values[i].title, index: i };
      }
    }
    return null; // Wenn der Wert nicht gefunden wird
  }

  const values = [
    { title: "Erste Hilfe / Opferhilfe", value: "erste_hilfe_opferhilfe" },
    { title: "Gewalt gegen Frauen", value: "gewalt_gegen_frauen" },
    {
      title: "Gewalt im eigenen Zuhause / in der Partnerschaft",
      value: "gewalt_im_zuhause",
    },
    { title: "Gewalt am Arbeitsplatz", value: "gewalt_am_arbeitsplatz" },
    { title: "Digitale Gewalt", value: "digitale_gewalt" },
    {
      title: "Gewalt an Kindern und Jugendlichen",
      value: "gewalt_an_kindern_und_jugendlichen",
    },
    {
      title: "Branchenspezifische Anlaufstellen",
      value: "branchenspezifische_anlaufstellen",
    },
    {
      title: "Diskriminierung (Geschlecht, LGBTQI+, Rassismus)",
      value: "diskriminierung",
    },
    { title: "Gewalt gegen Männer", value: "gewalt_gegen_maenner" },
    {
      title: "Beratungsstellen für (potenzielle) Täter",
      value: "beratungsstellen_fuer_taeter",
    },
  ];

  // anlaufstellenFromSanity
  useEffect(() => {
    if (state.anlaufstellenFromSanity.length === 0) {
      console.log("Fetching anlaufstellen from sanity");
      async function fetchAnlaufstellen() {
        try {
          let fetchedAnlaufstellen = await getAnlaufstellen();

          // fetchedPosts = prepareObjects(fetchedPosts);

          fetchedAnlaufstellen = groupByCategory(fetchedAnlaufstellen);

          dispatch({
            type: "SET_ANLAUFSTELLEN_FROM_SANITY",
            payload: fetchedAnlaufstellen,
          });
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }

      fetchAnlaufstellen();
    }
  }, []);

  /**
   * Holt Daten aus einer YAML-Datei und aktualisiert den globalen Zustand.
   * @param {string} url - Die URL zur YAML-Datei.
   * @param {function} dispatch - Die Dispatch-Funktion aus dem globalen Zustand.
   * @param {string} actionType - Der Typ der Aktion zum Aktualisieren des Zustands.
   */
  // const fetchAndParseYamlData = (url, dispatch, actionType) => {
  //   fetch(url)
  //     .then((response) => response.text())
  //     .then((yamlText) => {
  //       // Parst die YAML-Daten mit 'js-yaml' und aktualisiert den globalen Zustand
  //       const parsedData = yaml.load(yamlText);
  //       console.log(parsedData);
  //       dispatch({
  //         type: actionType,
  //         payload: parsedData,
  //       });
  //     });
  // };

  const groupByCategory = (inputArray) => {
    const groupedByCategory = {};

    // Gruppieren nach Kategorie
    inputArray.forEach((item) => {
      item.category.forEach((category) => {
        if (!groupedByCategory[category]) {
          groupedByCategory[category] = [];
        }
        groupedByCategory[category].push(item);
      });
    });

    // Formatierung des Rückgabe-Arrays
    const resultArray = Object.keys(groupedByCategory).map((category) => ({
      Anlaufstelle: groupedByCategory[category],
      Kategorie: category,
    }));

    resultArray.forEach((item) => {
      item.index = getTitleByValue(item.Kategorie).index;
      item.Kategorie = getTitleByValue(item.Kategorie).title;
    });

    let resultArray2 = [];

    resultArray.forEach((item) => {
      resultArray2[item.index] = item;
    });

    return resultArray2;
  };

  // useEffect(() => {
  //   fetchAndParseYamlData(
  //     "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/anlaufstellenData.yaml",
  //     dispatch,
  //     "SET_ANLAUFSTELLEN_DATA"
  //   );
  // }, [dispatch]);

  return (
    <div className="text-center text-color_font mt-0 pt-16 bg-fm_helles_beige">
      <SearchBarAnt />
      <AnlaufstellenContentNetflix />
    </div>
  );
}

export default Anlaufstellen_V2;
