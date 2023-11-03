import React, { useState, useEffect, useRef } from "react";
import { useGlobalState } from "../../data/GlobalState";

import yaml from "js-yaml";
import AnlaufstellenContent from "./AnlaufstellenContent";
import SearchBar from "./SearchBar";

function Anlaufstellen_V2() {
  const { state, dispatch } = useGlobalState();
  const [searchData, setSearchData] = useState({ tags: [], inputText: "" });

  const fetchAndParseYamlData = (url, dispatch, actionType) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        console.log(parsedData);

        dispatch({
          type: actionType,
          payload: parsedData,
        });
      });
  };

  const handleTagsChange = (tags, inputText) => {
    // Hier können Sie die Tags und den Input-Text speichern oder verwenden

    setSearchData({ tags, inputText });
    console.log(searchData);
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
    <div className="text-center text-color_font mt-0 pt-20">
      <SearchBar onTagsChange={handleTagsChange} />
      <AnlaufstellenContent />
    </div>
  );
}

export default Anlaufstellen_V2;
