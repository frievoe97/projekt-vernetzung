import React, { useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import ButtonBigRounded from "../elements/ButtonBigRounded";
import Preview from "./elements/Preview";
import PreviewV2 from "./elements/PreviewV2";
import NotFoundComponent from "../NotFoundComponent";

function InterviewContainer() {
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
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/interviews_v2.yaml",
      dispatch,
      "SET_INTERVIEW_V_2_DATA"
    );
  }, [dispatch]);

  // Daten für die Interviews
  const interviewData = [
    {
      id: 1,
      imageSrc: "https://picsum.photos/200/300?random=1",
      category: "Machtmissbrauch",
      title: "Interview mit Experten",
      date: "25. November 2023",
      description:
        "Ein Gespräch über die verschiedenen Aspekte von Machtmissbrauch und dessen Auswirkungen.",
    },
    // Weitere Interviews hier hinzufügen, falls benötigt
  ];

  console.log(state.interviewsV2);

  // return (
  //   <NotFoundComponent
  //     text={"Das Interview existiert nicht."}
  //     buttonText={"Zurück zur Startseite"}
  //     link={"/"}
  //   />
  // );

  if (state.interviewsV2.interviews == undefined) {
    return;
  }

  return (
    <div className="w-full bg-fm_weiss">
      <div className="max-w-screen-xl mx-auto text-justify p-4 pb-16">
        <div
          className="grid grid-cols-auto-fill gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          }}
        >
          {state.interviewsV2.interviews.map((interview, index) => (
            <div key={index} className="m-4 flex items-center justify-center">
              <PreviewV2
                title={interview.Headline}
                imageUrl={interview.BildTeaser}
                textTeaser={interview.TextTeaser}
                style={{ minWidth: "350px" }} // Mindestbreite für jedes Element
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InterviewContainer;
