import React, { useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";

import yaml from "js-yaml";
import PictureHeader_V2 from "./PictureHeader_V2";
import TextWithImage from "./TextWithImage";
import Wissensvermittlung from "./Wissensvermittlung";
import MotivationAusEigenerErfahrung from "./MotivationAusEigenerErfahrung";
import TestAntd from "./TestAntd";
import Numbers from "./Numbers";
// import AnimatedSVG from "./AnimatedSVG";

function Home_V2() {
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
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/startseite.yaml",
      dispatch,
      "SET_STARTSEITE_DATA"
    );
    console.log("Load Startseite Data: ", state.startseiteData);
  }, [dispatch]);

  return (
    <div className="text-center text-color_font bg-transparent pt-16">
      {/* <AnimatedSVG /> */}
      {/* <TestAntd /> */}
      <PictureHeader_V2 data={state.startseiteData.pictureHeader} />
      {/* <Numbers /> */}
      <TextWithImage data={state.startseiteData.textWithImage} />
      <Wissensvermittlung data={state.startseiteData.wissensvermittlung} />
      <MotivationAusEigenerErfahrung
        data={state.startseiteData.motivationAusEigenerErfahrung}
      />
    </div>
  );
}

export default Home_V2;
