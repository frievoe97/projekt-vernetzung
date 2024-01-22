import React, { useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";

import yaml from "js-yaml";

function WarumWir() {
  const { state, dispatch } = useGlobalState();

  const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        // console.log(parsedData);
        dispatch({
          type: actionType,
          payload: parsedData, // Verwenden Sie den übergebenen dataKey als Schlüssel
        });
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/warumWirPageData.yaml",
      dispatch,
      "SET_WARUM_WIR_PAGE_DATA",
      "warumWirPageData"
    );
  }, [dispatch]);

  return (
    <div className="p-4 mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl text-color_font">
      {state.warumWirPageData.header && (
        <h1 className="text-4xl font-bold m-4 mt-8">
          {state.warumWirPageData.header}
        </h1>
      )}

      {state.warumWirPageData.subheader && (
        <p className="text-lg m-4">{state.warumWirPageData.subheader}</p>
      )}

      {state.warumWirPageData.warumJetztData && (
        <div className="mt-8">
          {state.warumWirPageData.warumJetztData.map(
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

export default WarumWir;
