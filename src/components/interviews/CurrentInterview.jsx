import React, { useEffect } from "react";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";
import { FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Importiere die Link-Komponente
import "./CurrentInterview.css";

const CurrentInterview = (interview) => {
  const { state, dispatch } = useGlobalState();

  const convertToSlug = (inputString) => {
    if (inputString == undefined) return;
    return inputString.replace(/\s+/g, "-").toLowerCase();
  };

  function umlauteErsetzen(text) {
    const umlauteMap = {
      ä: "ae",
      ö: "oe",
      ü: "ue",
      ß: "ss",
      Ä: "Ae",
      Ö: "Oe",
      Ü: "Ue",
    };

    return text.replace(/[äöüßÄÖÜ]/g, (umlaut) => umlauteMap[umlaut]);
  }

  // console.log(interview);

  /*
          104: "28rem",
        128: "30rem",
        140: "40rem",
      },
      */

  // Hex1(background): "#D7E0FF"

  return (
    <div>
      <div className="md:flex hidden">
        <Link
          to={`/interviews-und-beitraege/${convertToSlug(
            interview.interview.Headline
          )}`}
          className="w-full h-128  flex items-center justify-center"
          style={{ backgroundColor: interview.interview["Hex1(background)"] }}
        >
          <div className="w-full h-128 ">
            <div className="h-full max-w-screen-xl mx-auto">
              <div className="w-full h-full relative ">
                <img
                  className="md:w-80 lg:w-128 absolute bottom-0 right-20 z-10"
                  src={interview.interview.Bild}
                  alt=""
                />
                <h1
                  className="absolute top-20 text-black p-2 font-bold rounded-lg w-140 text-left z-20 left-10"
                  id="current-interview-title"
                  // style={{ textShadow: "3px 3px 20px black" }}
                >
                  {umlauteErsetzen(interview.interview.Headline)}
                </h1>

                <div className="md:w-104 lg:w-128 xl:w-140 absolute bottom-12 left-12 text-black text-left shadow-2xl  p-4 z-20 bg-fm_weiss rounded-lg opacity-70">
                  {interview.interview.TextTeaser}
                </div>
                <FaQuoteRight
                  className="absolute top-14 rotate-180 text-4xl  z-10 left-2 "
                  size={70}
                  style={{ color: interview.interview["Hex2(card)"] }}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="md:hidden">
        <div
          className="w-full h-fit"
          style={{ backgroundColor: interview.interview["Hex1(background)"] }}
        >
          <div
            className=" relative text-black font-bold rounded-lg text-2xl text-left p-8 z-10 heading-koulen-black "
            id="current-interview-title"
          >
            <FaQuoteRight
              className="absolute left-4 top-4 rotate-180  text-4xl  -z-10 "
              size={30}
              style={{ color: interview.interview["Hex2(card)"] }}
            />
            {umlauteErsetzen(interview.interview.Headline)}
          </div>

          <div className="w-fit mx-auto">
            <img
              className="  h-64 object-cover p-4 pb-0"
              src={interview.interview.Bild}
              alt=""
            />
          </div>
          <div className=" bg-fm_weiss text-black text-left text-left bg-opacity-50 p-4">
            {interview.interview.TextTeaser}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentInterview;
