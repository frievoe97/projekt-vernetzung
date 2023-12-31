import React, { useState, useEffect, useRef } from "react";
import { useGlobalState } from "../../data/GlobalState";

import yaml from "js-yaml";
import IconSection from "./IconSection";
import MissionTitel from "./MissionTitel";
import WarumJetztWarumWir from "./WarumJetztWarumWir";
// import CircleElements from "./CircleElements";

function Mission_V2() {
  const { state, dispatch } = useGlobalState();
  const [isVisible, setIsVisible] = useState(false);
  const motionRefs = useRef([]);

  const handleVisibilityChange = (index, isVisible) => {
    setIsVisible(isVisible);
    motionRefs.current[index].style.opacity = isVisible ? 1 : 0;
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

  // "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/ueber_uns.yaml",
  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/ueber_uns.yaml",
      dispatch,
      "SET_UEBER_UNS_DATA"
    );
  }, [dispatch]);

  const elements = ["A", "B", "C", "D", "E"]; // Ihre Elemente hier einfügen

  return (
    <div className="text-center text-color_font bg-transparent pt-16">
      <MissionTitel data={state.ueberUns.missionTitel} />
      <IconSection data={state.ueberUns.iconTextRows} />
      {/* <CircleElements /> */}
      <WarumJetztWarumWir data={state.ueberUns.warumJetztWarumWir} />
    </div>
  );
}

export default Mission_V2;
