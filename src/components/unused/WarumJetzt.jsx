import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import yaml from "js-yaml";

function WarumJetzt() {
  const { state, dispatch } = useGlobalState();

  const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        console.log(parsedData);
        dispatch({
          type: actionType,
          payload: parsedData, // Verwenden Sie den übergebenen dataKey als Schlüssel
        });
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/warumJetztPageData.yaml",
      dispatch,
      "SET_WARUM_JETZT_PAGE_DATA",
      "warumJetztPageData"
    );
  }, [dispatch]);

  return (
    <div className="p-4 mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl text-color_font">
      {state.warumJetztPageData.header && (
        <h1 className="text-4xl font-bold m-4 mt-8">
          {state.warumJetztPageData.header}
        </h1>
      )}

      {state.warumJetztPageData.subheader && (
        <p className="text-lg m-4">{state.warumJetztPageData.subheader}</p>
      )}

      {state.warumJetztPageData.warumJetztData && (
        <div className="mt-8">
          {state.warumJetztPageData.warumJetztData.map(
            (kapitel, kapitelIndex) => (
              <div key={kapitelIndex} className="m-4 mb-8">
                <h2 className="text-2xl font-semibold mb-2">{kapitel.title}</h2>
                <div>
                  <p className="text-justify">{kapitel.text}</p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default WarumJetzt;
