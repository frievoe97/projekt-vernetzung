import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonBigRounded from "../elements/ButtonBigRounded";
import NotFoundComponent from "../NotFoundComponent";
import { IoArrowBackOutline } from "react-icons/io5";

// MARKDOWN TEST
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function InterviewDetail() {
  const { state, dispatch } = useGlobalState();
  const { organizationName } = useParams();
  // MARKDOWNTEST
  const [markdown, setMarkdown] = useState("");
  const url =
    "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/interviews/interview.md";

  let interview = {};

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

  useEffect(() => {
    // Hier wird der Markdown-Text von der URL abgerufen
    fetch(url)
      .then((response) => response.text())
      .then((data) => setMarkdown(data))
      .catch((error) =>
        console.error("Fehler beim Abrufen des Markdown:", error)
      );
    console.log(markdown);
  }, [url]);

  const convertToSlug = (inputString) => {
    return inputString.replace(/\s+/g, "-").toLowerCase();
  };

  if (state.interviewsV2.interviews == undefined) {
    return null; // Verwenden Sie null statt undefined, um einen leeren Render zu verhindern
  }

  for (let i = 0; i < state.interviewsV2.interviews.length; i++) {
    const title = state.interviewsV2.interviews[i].Headline;
    if (convertToSlug(title) === organizationName) {
      interview = state.interviewsV2.interviews[i];
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

  return (
    <div>
      <div className="bg-fm_blau w-full pt-16 shadow-2xl">
        <div className="w-full shadow-2xl">
          <div className="max-w-screen-xl mx-auto h-96 relative overflow-hidden">
            <div className="flex items-center ">
              {/* <IoArrowBackOutline className="text-5xl text-fm_weiss mt-7" /> */}
              <h1 className="font-bold mt-8 text-fm_weiss text-left w-4/5 mx-4">
                {interview.Headline}
              </h1>
            </div>
            <img
              src={interview.BildHeadline}
              className="w-96 h-96 rounded-full object-cover absolute right-28 -bottom-16 m-auto shadow-2xl"
              alt="Interview Image"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-fm_weiss">
        <div className="max-w-screen-xl mx-auto p-4">
          {markdown && (
            <div className="w-full bg-fm_weiss pt-8 pb-8">
              {/* <ReactMarkdown>{markdown}</ReactMarkdown> */}
              <ReactMarkdown className="prose max-w-none text-justify">
                {markdown}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InterviewDetail;
