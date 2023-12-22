import React, { useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import { FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Importiere die Link-Komponente

const CurrentInterview = () => {
  const { state, dispatch } = useGlobalState();

  const convertToSlug = (inputString) => {
    return inputString.replace(/\s+/g, "-").toLowerCase();
  };

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
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/interviews_v2.yaml",
      dispatch,
      "SET_INTERVIEW_V_2_DATA"
    );
  }, [dispatch]);

  if (Object.keys(state.interviewsV2).length <= 0) return;

  /*
    BildHeadline: "https://www.deine-korrespondentin.de/wp-content/uploads/2023/06/Lena-von-Holt-und-Pia-Stendera-@Livia-Kappler-1536x994.jpg"
    BildTeaser: "https://www.deine-korrespondentin.de/wp-content/uploads/2023/06/Lena-von-Holt-und-Pia-Stendera-@Livia-Kappler-1536x994.jpg"
    Headline: "HEADLINE PIA UND LENA"
    Interview: "Pia Stendera und Lena von Holt - \"Boys Club\"-Podcast"
    Rubrik: "Journalismus"
    TextInhaltInterview: ""
    TextTeaser: "Teaser Pia und Lena Teaser Pia und Lena Teaser Pia und Lena Teaser Pia und Lena"
  */

  return (
    <Link
      to={`/interviews-und-beitraege/${convertToSlug(
        state.interviewsV2.interviews[0].Headline
      )}`}
      className="w-full h-96 bg-fm_blau_light flex items-center justify-center"
      // Fügen Sie hier weitere CSS-Klassen hinzu, wenn benötigt
    >
      <div className="w-full h-96 ">
        <div className="h-full max-w-screen-xl mx-auto">
          <div className="w-full h-full relative overflow-hidden">
            <img
              // className="h-96 w-96 object-cover rounded-full relative right-20 top-10"
              // h-128 w-128
              className="w-24 h-24 md:w-80 md:h-80 lg:w-128 lg:h-128 object-cover rounded-full absolute -bottom-20 shadow-2xl right-20 z-10"
              src={state.interviewsV2.interviews[0].BildTeaser}
              alt=""
            />
            <h1
              className="absolute top-20 text-black p-2 font-bold rounded-lg w-96 text-left z-20"
              // style={{ textShadow: "3px 3px 20px black" }}
            >
              {state.interviewsV2.interviews[0].Headline}
            </h1>
            <div className="absolute bottom-12 left-24 bg-fm_weiss text-black w-96 text-left shadow-2xl bg-opacity-50 p-4 z-20">
              {state.interviewsV2.interviews[0].TextTeaser}
            </div>
            <FaQuoteRight className="absolute bottom-28 left-20 text-4xl text-fm_weiss" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CurrentInterview;
