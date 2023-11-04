import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";

function Mission() {
  const { state, dispatch } = useGlobalState();

  function convertTextWithSectionsToHTML(text) {
    // Teilen Sie den Text in Abschnitte auf, die mit '__' beginnen und enden.
    const sections = text.split(/(__.*?__)/);

    // Entfernen Sie leere Strings aus den Abschnitten und filtern Sie sie.
    const filteredSections = sections.filter(
      (section) => section.trim() !== ""
    );

    if (filteredSections.length === 0) {
      return text; // Keine Abschnitte gefunden, geben Sie den Text unverändert zurück.
    }

    // Fügen Sie vor und nach den Abschnitten <li>-Elemente hinzu.
    const htmlSections = filteredSections.map((section, index) => {
      if (section.startsWith("__") && section.endsWith("__")) {
        // Dies ist ein Abschnitt, fügen Sie ihn als <li> in das <ul> ein.
        return `<li key=${index}>${section.slice(2, -2)}</li>`;
      } else {
        // Dies ist normaler Text, geben Sie ihn unverändert zurück.
        return section;
      }
    });

    // Überprüfen Sie, ob das erste und das letzte Element in der gefilterten Liste Abschnitte sind.
    const hasFirstSection = filteredSections[0].startsWith("__");
    const hasLastSection =
      filteredSections[filteredSections.length - 1].endsWith("__");

    // Erstellen Sie das HTML mit <ul> nur vor dem ersten <li> und nach dem letzten <li>.
    let htmlText = "";
    if (hasFirstSection) {
      htmlText += "<ul>";
    }
    htmlText += htmlSections.join("");
    if (hasLastSection) {
      htmlText += "</ul>";
    }

    return htmlText;
  }

  const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        console.log(parsedData);
        dispatch({
          type: actionType,
          payload: parsedData, // Verwenden Sie den übergebenen dataKey als Schlüssel
        });
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/missionPageData.yaml",
      dispatch,
      "SET_MISSION_DATA",
      "missionPageData" // Übergeben Sie den Namen des Schlüssels
    );
  }, [dispatch]);

  return (
    <div className="p-4 text-center mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl text-color_font">
      {state.missionPageData.header && (
        <h1 className="text-4xl font-bold mt-8">
          {state.missionPageData.header}
        </h1>
      )}

      {state.missionPageData.subheader && (
        <p className="text-lg mt-4">{state.missionPageData.subheader}</p>
      )}

      {state.missionPageData.missionData && (
        <div className="mt-8 space-y-8">
          {state.missionPageData.missionData.map((mission, index) => (
            <div
              key={index}
              className="md:flex md:items-start justify-center md:justify-between "
            >
              <div className="md:w-1/2 text-left md:text-right m-4 md:mt-0 md:pr-8">
                <h2 className="text-2xl font-semibold">{mission.title}</h2>
              </div>
              <div className="md:w-1/2 text-left md:text-left m-4 md:mt-0">
                {/* <div className="text-justify">
                  {convertTextWithSectionsToHTML(mission.text)}
                </div> */}
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{
                    __html: convertTextWithSectionsToHTML(mission.text),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Mission;
