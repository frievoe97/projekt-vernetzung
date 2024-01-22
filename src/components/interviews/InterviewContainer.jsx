import React, { useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import PreviewV2 from "./elements/PreviewV2";

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
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/interviews_v3.yaml",
      dispatch,
      "SET_INTERVIEW_V_2_DATA"
    );
  }, [dispatch]);

  if (state.interviewsV2.interviews == undefined) {
    return;
  }

  // console.log(state.interviewsV2);

  // Hex1(background)

  return (
    <div className="w-full bg-fm_weiss">
      <div className="max-w-screen-xl mx-auto text-justify pb-16">
        <div
          className="grid grid-cols-auto-fill gap-4 px-8"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          }}
        >
          {state.interviewsV2.interviews
            .filter((interview) => interview.Freigabe === "ja")
            .map((interview, index) => (
              <div key={index} className="m-4 flex items-center justify-center">
                <PreviewV2
                  title={interview.Headline}
                  imageUrl={interview.Bild}
                  textTeaser={interview.TextTeaser}
                  bgColor={interview["Hex1(background)"]}
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
