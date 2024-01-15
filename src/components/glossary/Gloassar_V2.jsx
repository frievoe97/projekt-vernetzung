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

  // https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/glossar_2.yaml

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/glossar.yaml",
      dispatch,
      "SET_GLOSSAR_PAGE_DATA"
    );
  }, [dispatch]);

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/glossar_2.yaml",
      dispatch,
      "SET_GLOSSARY_NEW_DATA"
    );
    // console.log(state.glossaryNew);
  }, [dispatch]);

  // console.log(sortObjectsByBegriff(state.glossaryNew.glossaryData));

  return (
    <div className="text-center text-color_font bg-transparent pt-16">
      <PictureHeaderGlossary data={state.glossarData.pictureHeaderGlossary} />
      <GlossaryContent data={state.glossaryNew} />
    </div>
  );
}

export default Gloassar_V2;

// Bei „pathologischer Narzissmus“ und Bossing fehlen die weiterführenden Links zu Drittanbietern
