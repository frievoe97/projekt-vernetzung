import React, { useEffect } from "react";

import InterviewContainer from "./InterviewContainer";
import CurrentInterview from "./CurrentInterview";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";

import NotFoundComponent from "../NotFoundComponent";

import { IoMailOutline, IoLogoInstagram } from "react-icons/io5";

import { Link } from "react-router-dom";

function Interviews() {
  const { state, dispatch } = useGlobalState();

  const fetchAndParseYamlData = (url, dispatch, actionType) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);

        dispatch({
          type: actionType,
          payload: parsedData,
        });
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/interviews_v3.yaml",
      dispatch,
      "SET_INTERVIEW_V_2_DATA"
    );
  }, [dispatch]);

  // return (
  //   <NotFoundComponent
  //     text={"Das Interview existiert nicht."}
  //     buttonText={"Zurück zur Startseite"}
  //     link={"/"}
  //   />
  // );

  if (Object.keys(state.interviewsV2).length <= 0) return;

  function findeLetztenFreigegebenenEintrag(interviewsArray) {
    let letzterFreigegebenerEintrag = null;

    for (let i = interviewsArray.length - 1; i >= 0; i--) {
      const interview = interviewsArray[i];
      if (interview.Freigabe === "ja") {
        letzterFreigegebenerEintrag = interview;
        break; // Breche die Schleife ab, sobald ein freigegebener Eintrag gefunden wurde
      }
    }

    return letzterFreigegebenerEintrag;
  }

  return (
    <div>
      <div className="text-center text-color_font bg-fm_weiss pt-16">
        <CurrentInterview
          interview={findeLetztenFreigegebenenEintrag(
            state.interviewsV2.interviews
          )}
        />
        <div className="flex  max-w-screen-xl mx-auto justify-between px-8  pt-8">
          <div className="flex flex-col md:flex-row w-full   justify-between">
            <h1 className="bg-fm_weiss  w-fit text-2xl text-left font-bold mb-4">
              Hier findest du unsere Expert:innen-Interviews und Beiträge
            </h1>
            <div className="flex space-x-4 mb-4 items-center w-fit">
              <img src="/logo-2.jpeg" className="h-8" alt="" />
              <a href="mailto:projekt-vernetzung@email.com">
                <IoMailOutline size={26} color="#72A7FF" />
              </a>
              <a
                href="https://www.instagram.com/projekt.vernetzung"
                target="_blank"
              >
                <IoLogoInstagram size={22} color="#72A7FF" />
              </a>
            </div>
          </div>
        </div>
        <InterviewContainer />
      </div>
    </div>
  );
}

export default Interviews;
