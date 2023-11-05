import React, { useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";

import yaml from "js-yaml";
import PictureHeader_V2 from "./PictureHeader_V2";
import TextWithImage from "./TextWithImage";
import Wissensvermittlung from "./Wissensvermittlung";
import MotivationAusEigenerErfahrung from "./MotivationAusEigenerErfahrung";

function Home_V2() {
  const { state, dispatch } = useGlobalState();

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

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/startseite.yaml",
      dispatch,
      "SET_STARTSEITE_DATA"
    );
  }, [dispatch]);

  return (
    <div className="text-center text-color_font bg-transparent pt-16">
      <PictureHeader_V2 data={state.startseiteData.pictureHeader} />
      <TextWithImage data={state.startseiteData.textWithImage} />
      <Wissensvermittlung data={state.startseiteData.wissensvermittlung} />
      <MotivationAusEigenerErfahrung />
    </div>
  );
}

export default Home_V2;
