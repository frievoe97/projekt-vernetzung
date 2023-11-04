import React, { useEffect, useState } from "react";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";

function Example() {
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
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/textListe.yaml",
      dispatch,
      "SET_TEXT_LISTE_DATA",
      "textListe"
    );
  }, [dispatch]);

  if (!state.textListe) {
    return <div>Hi</div>;
  } else {
    console.log(state.textListe);
  }

  return (
    <div>
      {state.textListe.texte.map((item, index) => (
        <div key={index}>
          <p>{item.text}</p>
          {item.list && (
            <ul>
              {item.list.map((listItem, listIndex) => (
                <li key={listIndex}>{listItem}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Example;
