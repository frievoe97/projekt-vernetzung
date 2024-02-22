import React, { useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";

import yaml from "js-yaml";
import IconSection from "./IconSection";
import MissionTitel from "./MissionTitel";
import WarumJetztWarumWir from "./WarumJetztWarumWir";

function Mission_V2() {
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
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/ueber_uns.yaml",
      dispatch,
      "SET_UEBER_UNS_DATA"
    );
  }, [dispatch]);

  return (
    <div className="text-center text-color_font bg-transparent pt-16">
      <MissionTitel data={state.ueberUns.missionTitel} />
      <IconSection data={state.ueberUns.iconTextRows} />
      <WarumJetztWarumWir data={state.ueberUns.warumJetztWarumWir} />
    </div>
  );
}

export default Mission_V2;
