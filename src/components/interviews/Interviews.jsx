import React, { useEffect, useRef } from "react";

import InterviewContainer from "./InterviewContainer";
import CurrentInterview from "./CurrentInterview";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";

import { getPosts } from "../../client";

import { IoMailOutline, IoLogoInstagram } from "react-icons/io5";

function Interviews() {
  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    if (state.interviewFromSanity.length === 0) {
      async function fetchPosts() {
        try {
          let fetchedPosts = await getPosts();

          fetchedPosts = prepareObjects(fetchedPosts);

          dispatch({
            type: "SET_INTERVIEW_FROM_SANITY",
            payload: fetchedPosts,
          });
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }

      fetchPosts();
    }
  }, []);

  const prepareObjects = (array) => {
    // Eine neue Array-Variable für die bearbeiteten Objekte erstellen
    let preparedArray = [];

    // Durch jedes Objekt im Array iterieren
    array.forEach((obj) => {
      // Ein neues Objekt erstellen, um die unerwünschten Eigenschaften zu entfernen und das Datum zu formatieren
      let preparedObj = {
        ...obj, // Alle Eigenschaften des ursprünglichen Objekts kopieren
      };

      // Unerwünschte Eigenschaften entfernen
      delete preparedObj.createdAt;
      delete preparedObj._id;
      delete preparedObj._rev;
      delete preparedObj._type;
      delete preparedObj._updatedAt;

      // launchDate in ein Date-Objekt konvertieren
      if (preparedObj.launchDate) {
        preparedObj.launchDate = new Date(preparedObj.launchDate);
      }

      if (preparedObj.quotationMarkColor) {
        preparedObj.quotationMarkColor = preparedObj.quotationMarkColor.hex;
      }

      if (preparedObj.backgroundColor) {
        preparedObj.backgroundColor = preparedObj.backgroundColor.hex;
      }

      // Das bearbeitete Objekt zum neuen Array hinzufügen
      preparedArray.push(preparedObj);
    });

    // Das bearbeitete Array nach dem Datum in launchDate sortieren
    preparedArray.sort((a, b) => a.launchDate - b.launchDate);

    // Das bearbeitete Array zurückgeben
    return preparedArray;
  };

  if (state.interviewFromSanity.length <= 0) return;

  // console.log(state.interviewFromSanity[state.interviewFromSanity.length - 1]);

  return (
    <div>
      <div className="text-center text-color_font bg-fm_weiss pt-16">
        <CurrentInterview
          interview={
            state.interviewFromSanity[state.interviewFromSanity.length - 1]
          }
        />
        <div className="flex  max-w-screen-xl mx-auto justify-between px-8  pt-8">
          <div className="flex flex-col  grow justify-between">
            <h1 className="bg-fm_weiss   text-2xl text-left font-bold mb-4">
              Hier findest du unsere Expert:innen-Interviews und Beiträge
            </h1>
            <div className="flex space-x-4 mb-4 items-center w-fit">
              <img src="/logo-2.jpeg" className="h-8" alt="" />
              <a href="mailto:projekt-vernetzung@email.com">
                <IoMailOutline size={26} color="#72A7FF" />
              </a>
              <a
                href="https://www.instagram.com/projekt.vernetzung"
                target="_blank"
              >
                <IoLogoInstagram size={22} color="#72A7FF" />
              </a>
            </div>
          </div>
        </div>
        <InterviewContainer interviews={state.interviewFromSanity} />
      </div>
    </div>
  );
}

export default Interviews;
