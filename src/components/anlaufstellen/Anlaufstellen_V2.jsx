import React, { useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import AnlaufstellenContentNetflix from "./AnlaufstellenContentNetflix";
import SearchBarAnt from "./SearchBarAnt";

import { getAnlaufstellen } from "../../client";

import { ANLAUFSTELLEN_CATEGORY_MAPPING } from "../../utils/constants";

function Anlaufstellen_V2() {
  const { state, dispatch } = useGlobalState();

  function getTitleByValue(targetValue) {
    for (let i = 0; i < ANLAUFSTELLEN_CATEGORY_MAPPING.length; i++) {
      if (ANLAUFSTELLEN_CATEGORY_MAPPING[i].value === targetValue) {
        return { title: ANLAUFSTELLEN_CATEGORY_MAPPING[i].title, index: i };
      }
    }
    return null;
  }

  // anlaufstellenFromSanity
  useEffect(() => {
    if (state.anlaufstellenFromSanity.length === 0) {
      console.log("Fetching anlaufstellen from sanity");
      async function fetchAnlaufstellen() {
        try {
          let fetchedAnlaufstellen = await getAnlaufstellen();

          // fetchedPosts = prepareObjects(fetchedPosts);
          console.log("fetchedAnlaufstellen", fetchedAnlaufstellen);

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

  return (
    <div className="text-center text-color_font mt-0 pt-16 bg-fm_helles_beige">
      <SearchBarAnt />
      <AnlaufstellenContentNetflix />
    </div>
  );
}

export default Anlaufstellen_V2;
