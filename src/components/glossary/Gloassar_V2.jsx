import React, { useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import PictureHeaderGlossary from "./PictureHeaderGlossary";
import GlossaryContent from "./GlossaryContent";
import { getGlossary } from "../../client";

function Gloassar_V2() {
  const { state, dispatch } = useGlobalState();

  // useEffect(() => {
  //   if (state.glossaryFromSanity.length === 0) {
  //     console.log("Fetching glossary from sanity");
  //     async function fetchGlossary() {
  //       try {
  //         let fetchedGlossary = await getGlossary();

  //         // dispatch({
  //         //   type: "SET_GLOSSARY_FROM_SANITY",
  //         //   payload: fetchedGlossary,
  //         // });
  //       } catch (error) {
  //         console.error("Error fetching posts:", error);
  //       }
  //     }

  //     fetchGlossary();
  //   }
  // }, []);

  // const fetchAndParseYamlData = (url, dispatch, actionType) => {
  //   fetch(url)
  //     .then((response) => response.text())
  //     .then((yamlText) => {
  //       const parsedData = yaml.load(yamlText);

  //       dispatch({
  //         type: actionType,
  //         payload: parsedData,
  //       });
  //     });
  // };

  // useEffect(() => {
  //   fetchAndParseYamlData(
  //     "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/glossar.yaml",
  //     dispatch,
  //     "SET_GLOSSAR_PAGE_DATA"
  //   );
  // }, [dispatch]);

  return (
    <div className="text-center text-color_font bg-transparent pt-16">
      <PictureHeaderGlossary data={state.glossarData.pictureHeaderGlossary} />
      <GlossaryContent data={state.glossaryFromSanity} />
    </div>
  );
}

export default Gloassar_V2;
