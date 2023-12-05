import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonBigRounded from "../elements/ButtonBigRounded";
import NotFoundComponent from "../NotFoundComponent";
import { IoArrowBackOutline } from "react-icons/io5";

function InterviewDetail() {
  const { state, dispatch } = useGlobalState();
  const { organizationName } = useParams();

  let interview = {};

  const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        dispatch({
          type: actionType,
          payload: parsedData[dataKey], // Verwenden Sie den übergebenen dataKey als Schlüssel
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

  const convertToSlug = (inputString) => {
    return inputString.replace(/\s+/g, "-").toLowerCase();
  };

  // if (state.interviews.length == 0) {
  //   return (
  //     <NotFoundComponent
  //       text={"Das Interview existiert nicht."}
  //       buttonText={"Zurück zu den Interviews"}
  //       link={"/interviews"}
  //     />
  //   );
  // }

  if (Object.keys(state.interviewsV2).length == 0) {
    return;
  }

  console.log(state.interviewsV2);

  for (let i = 0; i < state.interviewsV2.length; i++) {
    const title = state.interviewsV2[i].title;
    if (convertToSlug(title) === organizationName) {
      interview = state.interviewsV2[i];
    }
  }

  if (!interview) {
    // Hier kannst du eine Meldung anzeigen, wenn das Interview nicht gefunden wurde.
    // return <p>Interview nicht gefunden.</p>;
    return (
      <NotFoundComponent
        text={"Das Interview existiert nicht."}
        buttonText={"Zurück zu den Interviews"}
        link={"/interviews"}
      />
    );
  }

  console.log("INTERVIEW: ", interview);

  return (
    <div className="text-center text-color_font bg-transparent pt-16 relative bg-blue-500">
      <div className="rounded-xl w-full mx-auto">
        <div className="max-w-screen-xl mx-auto h-96 bg-blue-500 relative overflow-hidden">
          <div className="flex items-center">
            {/* <IoArrowBackOutline className="text-5xl text-fm_weiss mt-7" /> */}
            <h1 className="font-bold mt-8 text-fm_weiss text-left w-4/5 mx-4">
              {interview.title}
            </h1>
          </div>
          <img
            src={interview.imageSrc}
            className="w-96 h-96 rounded-full object-cover absolute right-28 -bottom-24 m-auto"
            alt="Interview Image"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative overflow-hidden mx-auto">
      {interview.image && (
        <div className="w-full max-h-64 overflow-hidden relative">
          <img
            src={interview.image}
            alt={interview.name}
            className="w-full h-full object-cover object-center contrast-50 min-h-[200px] mix-blend-multiply"
          />
          {/* <div className="absolute left-0  bottom-0 flex items-center justify-center text-color_font w-fit h-fit bg-white rounded  ">
            <h1 className="text-2xl font-bold p-4">{interview.name}</h1>
          </div> */}
        </div>
      )}

      {interview.interview && (
        <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl my-4 md:my-16">
          <div className="px-4 md:border-2 md:border-black md:rounded-xl md:shadow-xl md:py-8 md:mx-8">
            <button className="text-color_font overflow-hidden transition-border-color hover:border-transparent bg-transparent px-0 md:p-4">
              <Link
                className="text-color_font hover:text-color_font"
                to={`/interviews`}
              >
                <FontAwesomeIcon icon={faAngleLeft} className="mr-4" />
                Zurück
              </Link>
            </button>
            <div className="bg-transparent  rounded-lg md:p-4">
              <h2 className="text-2xl font-bold mb-2">{interview.name}</h2>
              <p className="text-color_font_light text mb-2">
                Datum: {interview.date}
              </p>
              <div className="space-y-8 text-lg">
                {interview.interview.map((item, index) => (
                  <div key={index}>
                    <p className="font-bold mb-4">{item.Frage}</p>
                    <p className="text-justify">{item.Antwort}</p>
                  </div>
                ))}
              </div>
            </div>
            <ButtonBigRounded
              buttonText="Zurück zu allen Interviews"
              link="/interviews"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default InterviewDetail;
