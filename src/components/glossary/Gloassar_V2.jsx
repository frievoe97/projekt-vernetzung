import React, { useState, useEffect, useRef } from "react";

import { useGlobalState } from "../../data/GlobalState";

import yaml from "js-yaml";
import PictureHeaderGlossary from "./PictureHeaderGlossary";
import GlossaryContent from "./GlossaryContent";

function Gloassar_V2() {
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

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/landingPageData.yaml",
      dispatch,
      "SET_LANDING_PAGE_DATA"
    );
  }, [dispatch]);

  return (
    <div className="text-center text-color_font bg-transparent pt-16">
      <PictureHeaderGlossary />
      <GlossaryContent />
    </div>
  );
}

export default Gloassar_V2;