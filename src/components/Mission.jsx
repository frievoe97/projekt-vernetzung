import React, { useState, useEffect } from "react";
import { useGlobalState } from "../data/GlobalState";
import yaml from "js-yaml";

function Mission() {
  const { state, dispatch } = useGlobalState();

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
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/missionPageData.yaml",
      dispatch,
      "SET_MISSION_DATA",
      "missionPageData" // Übergeben Sie den Namen des Schlüssels
    );
  }, [dispatch]);

  return (
    <div className="p-4 text-center mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl text-color_font">
      {state.missionPageData.header && (
        <h1 className="text-4xl font-bold mt-8">
          {state.missionPageData.header}
        </h1>
      )}

      {state.missionPageData.subheader && (
        <p className="text-lg mt-4">{state.missionPageData.subheader}</p>
      )}

      {state.missionPageData.missionData && (
        <div className="mt-8 space-y-8">
          {state.missionPageData.missionData.map((mission, index) => (
            <div
              key={index}
              className="md:flex md:items-start justify-center md:justify-between "
            >
              <div className="md:w-1/2 text-left md:text-right m-4 md:mt-0 md:pr-8">
                <h2 className="text-2xl font-semibold">{mission.title}</h2>
              </div>
              <div className="md:w-1/2 text-left md:text-left m-4 md:mt-0">
                <p className="text-justify">{mission.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Mission;
