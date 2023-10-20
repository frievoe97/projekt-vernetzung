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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function InterviewDetail() {
  const { state, dispatch } = useGlobalState();
  const { organizationName } = useParams();

  const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        // console.log(parsedData);
        // console.log(dataKey);
        // console.log(parsedData[dataKey]);
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
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/interviewExample.yaml",
      dispatch,
      "SET_INTERVIEW_EXAMPLE",
      "interviewExample" // Übergeben Sie den Namen des Schlüssels
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

  //   console.log(state.interviewExample);

  const firstInterview = state.interviewExample[0]["FragenUndAntworten"];
  console.log(firstInterview);

  return (
    <div className="relative overflow-hidden">
      <div className="w-full max-h-64 overflow-hidden relative">
        <img
          src={interview.image}
          alt={interview.name}
          className="w-full h-full object-cover object-center contrast-50"
        />
        <div className="absolute left-0  bottom-0 flex items-center justify-center text-black w-fit h-fit bg-white rounded  ">
          <h1 className="text-2xl font-bold p-4">{interview.name}</h1>
        </div>
      </div>
      <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl my-16">
        <button className="text-black overflow-hidden transition-border-color hover:border-none bg-transparent">
          <Link className="text-black hover:text-black" to={`/interviews`}>
            <FontAwesomeIcon icon={faAngleLeft} className="mr-4" />
            Zurück
          </Link>
        </button>
        <div className="bg-color_4  rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2">{interview.name}</h2>
          <p className="text-gray-500 text mb-2">Datum: {interview.date}</p>
          <div className="space-y-8 text-lg">
            {firstInterview.map((item) => (
              //   <div key={item.id}>
              //     <p>ID: {item.id}</p>
              //     <p>Name: {item.name}</p>
              //   </div>
              <div>
                {" "}
                <div key={item.Frage} className="font-bold">
                  {item.Frage}
                </div>
                <div className="text-justify">{item.Antwort}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-6 px-6 py-3 text-black border-2 border-black rounded-full overflow-hidden transition-border-color hover:border-gray-400 hover:bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 hover:animate-circle bg-transparent">
          <Link className="text-black hover:text-black" to={`/interviews`}>
            <FontAwesomeIcon icon={faAngleLeft} className="mr-4" />
            Zurück zu allen Interviews
          </Link>
        </button>
      </div>
    </div>
  );
}

export default InterviewDetail;
