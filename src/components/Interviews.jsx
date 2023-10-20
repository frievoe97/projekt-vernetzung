import React, { useState, useRef, useEffect } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useGlobalState } from "../data/GlobalState";
import Slideshow from "./Slideshow";
import yaml from "js-yaml";

function Interviews() {
  const { state, dispatch } = useGlobalState();

  function convertToSlug(inputString) {
    // Ersetze Leerzeichen durch Bindestriche und konvertiere zu Kleinbuchstaben
    return inputString.replace(/\s+/g, "-").toLowerCase();
  }

  const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        dispatch({
          type: actionType,
          payload: parsedData[dataKey], // Verwenden Sie den übergebenen dataKey als Schlüssel
        });
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/anlaufstellenData.yaml",
      dispatch,
      "SET_ANLAUFSTELLEN_DATA",
      "anlaufstellenData" // Übergeben Sie den Namen des Schlüssels
    );

    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/slideshowData.yaml",
      dispatch,
      "SET_SLIDE_SHOW_DATA",
      "slideshowData" // Übergeben Sie den Namen des Schlüssels
    );
  }, [dispatch]);

  return (
    <div className="bg-color_4 p-4 md:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-bold mt-8 mb-6">Interviews</h1>
      <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl my-16">
        {state.anlaufstellenData.map((interview, index) => (
          <div
            key={index}
            className={`border-t-2 border-black py-6 ${
              index % 2 === 0
                ? "flex flex-col md:flex-row-reverse"
                : "flex flex-col md:flex-row"
            } space-y-4 md:space-x-4 md:space-y-0 items-center`}
          >
            <div className="md:w-1/2 p-4">
              <img
                src={interview.image}
                alt={`Interview ${index + 1}`}
                className="w-100 h-auto mx-auto"
              />
            </div>
            <div className="md:w-1/2 p-4">
              <p className="text-gray-500">{interview.date}</p>
              <h2 className="text-xl font-bold">{interview.name}</h2>
              <p>{interview.interviewShort}</p>
              <button className="mt-6 px-6 py-3 text-black border-2 border-black rounded-full overflow-hidden transition-border-color hover:border-gray-400 hover:bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 hover:animate-circle bg-transparent">
                <Link
                  className="text-black hover:text-black "
                  to={`/interviews/${
                    convertToSlug(interview.name) + "-" + interview.id
                  }`}
                >
                  weiterlesen...
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interviews;
