import React, { useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import ButtonBigRounded from "../elements/ButtonBigRounded";
import Preview from "./elements/Preview";
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

  return (
    <NotFoundComponent
      text={"Das Interview existiert nicht."}
      buttonText={"Zurück zur Startseite"}
      link={"/"}
    />
  );

  if (state.interviewsV2.interviews == undefined) {
    return;
  }

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto text-justify p-4 pb-16">
        <div className="flex flex-wrap -mx-2">
          {state.interviewsV2.interviews.map((interview, index) => (
            // <div key={interview.id} className="w-1/2 lg:w-1/2 xl:w-1/4 p-2">
            //   <div className="p-2 h-full">
            //     <div className="p-0 h-full w-full bg-fm_weiss shadow-2xl rounded-2xl  hover:scale-105 transition-transform duration-300">
            //       <img
            //         src={interview.imageSrc}
            //         alt={interview.title}
            //         className="w-full h-40 object-cover rounded-t-2xl"
            //       />
            //       <div className="p-4 pt-0">
            //         {" "}
            //         <h2 className="text-sm mb-1 font-bold mt-4">
            //           {interview.category}
            //         </h2>
            //         <h3 className="text-lg font-semibold text-left mb-1">
            //           {interview.title}
            //         </h3>
            //         <p className="text-xs">{interview.date}</p>
            //         <p className="text-sm mt-2">{interview.description}</p>
            //         <ButtonBigRounded
            //           buttonText={"Weiterlesen"}
            //           link={"/interviews-und-beitraege"}
            //         />
            //       </div>
            //     </div>
            //   </div>
            // </div>

            <div key={index} className="m-4 flex justify-around">
              <Preview
                title={interview.Headline}
                imageUrl={interview.BildTeaser}
                textTeaser={interview.TextTeaser}
              />
            </div>
            // <div key={index}>Hi</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InterviewContainer;
