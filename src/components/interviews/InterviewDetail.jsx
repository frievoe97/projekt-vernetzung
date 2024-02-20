import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Link, useParams } from "react-router-dom";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import NotFoundComponent from "../NotFoundComponent";
import CurrentInterview from "./CurrentInterview";
import { IoArrowBackOutline } from "react-icons/io5";
import "./InterviewDetail.css";

// MARKDOWN TEST
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Avatar } from "antd";
import * as antd from "antd";

function InterviewDetail() {
  const { state, dispatch } = useGlobalState();
  const { organizationName } = useParams();
  // MARKDOWNTEST
  const [markdown, setMarkdown] = useState("");
  // const url =
  //   "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/interviews/interview.md";

  let url =
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

  const processTextWithColon = (inputText) => {
    if (inputText.startsWith(":")) {
      // Entferne das führende ":" und wende trim() an
      const processedText = inputText.substring(1).trim();
      return processedText;
    } else {
      // Wenn der Text nicht mit ":" beginnt, gib ihn unverändert zurück
      return inputText;
    }
  };

  const findFirstExclamationText = (inputString) => {
    // // Definiere den regulären Ausdruck
    // const regex = /!([^!\s]+)!/;

    // // Verwende die exec-Methode, um die erste Übereinstimmung zu finden
    // const match = regex.exec(inputString);

    // if (match) {
    //   const foundText = match[1]; // Der Text zwischen den Ausrufezeichen
    //   let restOfText = inputString.substring(match.index + match[0].length); // Der Rest des Eingabestrings
    //   restOfText = processTextWithColon(restOfText);

    //   return { foundText, restOfText };
    // } else {
    //   return null; // Wenn keine Übereinstimmung gefunden wurde
    // }
    return null;
  };

  const hasStrongTagOrText = (element) => {
    const result = {
      hasStrong: false, // Standardmäßig auf false setzen
      htmlElement: element, // Das ursprüngliche Element

      // Methode zum Aktualisieren der Ergebnisse, falls ein <strong>-Tag gefunden wird
      setStrongElement(strongElement) {
        this.hasStrong = true;
        this.htmlElement = strongElement;
      },
    };

    // Überprüfen, ob das Element ein <strong>-Tag ist
    if (element.children.length > 0) {
      result.setStrongElement(element.children[0]);
    } else {
      // Überprüfen, ob das Element nur Textknoten enthält
      const childNodes = element.childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        const node = childNodes[i];
        if (
          node.nodeType === Node.TEXT_NODE &&
          node.textContent.trim() !== ""
        ) {
          // Das Element enthält Textknoten
          return result; // Rückgabe des Ergebnisobjekts mit Textinhalt und false für hasStrong
        }
      }
    }

    // Wenn weder <strong> noch Textknoten gefunden wurden
    return result; // Rückgabe des Ergebnisobjekts mit den Standardwerten (false für hasStrong und ursprüngliches Element)
  };

  const findAllLeaves = (element, leaves = []) => {
    const children = element.children;

    if (children.length === 0) {
      leaves.push(element);
    } else {
      for (const child of children) {
        findAllLeaves(child, leaves);
      }
    }

    return leaves;
  };

  const replaceStrongWithAvatar = () => {
    const interviewContent = document.getElementById("interview-content");

    if (!interviewContent) return;

    const allChildren = findAllLeaves(interviewContent);

    allChildren.forEach((tag) => {
      const splitText = findFirstExclamationText(tag.innerText.trim());

      if (splitText) {
        const avatar = (
          <Avatar
            style={{
              backgroundColor:
                splitText.foundText == "PV" ? "#72A7FF" : "#FB819B",
            }}
            className="avatar-name"
            size="large"
          >
            {splitText.foundText}
          </Avatar>
        );

        tag.innerHTML = "";
        const root = createRoot(tag);
        root.render(
          <>
            {avatar}
            {splitText.restOfText}
          </>
        );
      }
    });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/interviews_v3.yaml",
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
    console.log("Markdown: ", markdown);
    // Change Avatar
    replaceStrongWithAvatar();
  }, [url, interview]);

  const convertToSlugOld = (inputString) => {
    return inputString.replace(/\s+/g, "-").toLowerCase();
  };

  const convertToSlug = (inputString) => {
    // Umlaute und große Umlaute ersetzen
    inputString = inputString
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss")
      .replace(/Ä/g, "ae")
      .replace(/Ö/g, "oe")
      .replace(/Ü/g, "ue");

    // Satzzeichen und Sonderzeichen entfernen und in Kleinbuchstaben umwandeln
    inputString = inputString
      .replace(/[^\w\s-]/g, "") // Alle nicht-alphanumerischen Zeichen entfernen
      .replace(/\s+/g, "-") // Leerzeichen durch Bindestriche ersetzen
      .toLowerCase(); // In Kleinbuchstaben umwandeln

    return inputString;
  };

  if (state.interviewsV2.interviews == undefined) {
    return null; // Verwenden Sie null statt undefined, um einen leeren Render zu verhindern
  }

  // New URL
  for (let i = 0; i < state.interviewsV2.interviews.length; i++) {
    const title = state.interviewsV2.interviews[i].Headline;
    if (convertToSlug(title) === organizationName) {
      interview = state.interviewsV2.interviews[i];
    }
  }

  // Old URL -> could be removed in the future
  if (Object.keys(interview).length == 0) {
    // Falls interview immer noch null oder undefined ist, die Methode convertToSlugOld verwenden
    for (let i = 0; i < state.interviewsV2.interviews.length; i++) {
      const title = state.interviewsV2.interviews[i].Headline;
      if (convertToSlugOld(title) === organizationName) {
        interview = state.interviewsV2.interviews[i];
        break; // Interview gefunden, Schleife beenden
      }
    }
  }

  if (!interview) {
    return (
      <NotFoundComponent
        text={"Das Interview existiert nicht."}
        buttonText={"Zurück zu den Interviews"}
        link={"/interviews"}
      />
    );
  }

  if (interview.TextInhaltInterview) {
    url = interview.TextInhaltInterview;
  }

  function LinkRenderer(props) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    );
  }

  return (
    <div>
      <div className=" pt-16">
        <CurrentInterview interview={interview} />
      </div>
      <div className="w-full bg-fm_weiss">
        <div className="max-w-screen-lg mx-auto p-4">
          <Link to="/interviews-und-beitraege">
            <div className="flex items-center">
              <IoArrowBackOutline color="black" size={20} />
              <p className="text-black font-bold">Zurück zu allen Interviews</p>
            </div>
          </Link>
          {markdown && (
            <div
              className="max-w-screen-lg mx-auto bg-fm_weiss pt-8 pb-8"
              id="interview-content"
            >
              <ReactMarkdown
                className="prose max-w-none md:text-left blockquote-margin"
                components={{ a: LinkRenderer }}
              >
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
