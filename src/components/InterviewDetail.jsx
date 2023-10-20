import React, { useState, useRef, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
} from "react-router-dom";
import { useGlobalState } from "../data/GlobalState";
import yaml from "js-yaml";

function InterviewDetail() {
  const { state, dispatch } = useGlobalState();
  const { organizationName } = useParams();

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
  }, [dispatch]);

  const interview = state.anlaufstellenData.find(
    (interview) =>
      convertToSlug(interview.name) + "-" + interview.id === organizationName
  );

  if (!interview) {
    // Hier kannst du eine Meldung anzeigen, wenn das Interview nicht gefunden wurde.
    return <p>Interview nicht gefunden.</p>;
  }

  // Ersetze Leerzeichen durch Bindestriche und konvertiere zu Kleinbuchstaben
  function convertToSlug(inputString) {
    return inputString.replace(/\s+/g, "-").toLowerCase();
  }

  return (
    <div className="relative overflow-hidden">
      <div className="w-full max-h-64 overflow-hidden relative">
        <img
          src={interview.image}
          alt={interview.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute left-0  bottom-0 flex items-center justify-center text-black w-fit h-fit bg-white rounded  ">
          <h1 className="text-2xl font-bold p-4">{interview.name}</h1>
        </div>
      </div>
      <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl my-16">
        <div className="p-6">
          <h1 className=" mb-2">{interview.name}</h1>
          <p className=" mb-2">{interview.date}</p>
          <p className="">{interview.description}</p>
        </div>
        <button className="mt-6 px-6 py-3 text-black border-2 border-black rounded-full overflow-hidden transition-border-color hover:border-gray-400 hover:bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 hover:animate-circle bg-transparent">
          <Link to={`/interviews`}>Zurück zu allen Interviews</Link>
        </button>
      </div>
    </div>
  );
}

export default InterviewDetail;
