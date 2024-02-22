import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./CurrentInterview.css";

const CurrentInterview = (interview) => {
  const convertToSlug = (inputString) => {
    inputString = inputString
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss")
      .replace(/Ä/g, "ae")
      .replace(/Ö/g, "oe")
      .replace(/Ü/g, "ue");

    inputString = inputString
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    return inputString;
  };

  function umlauteErsetzen(text) {
    if (!text) return "";
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

  return (
    <div>
      <div className="md:flex hidden">
        <Link
          to={`/interviews-und-beitraege/${convertToSlug(
            interview.interview.headline
          )}`}
          className="w-full h-128  flex items-center justify-center"
          style={{ backgroundColor: interview.interview.backgroundColor }}
        >
          <div className="w-full h-128 ">
            <div className="h-full max-w-screen-xl mx-auto">
              <div className="w-full h-full relative ">
                <img
                  className="md:w-80 lg:w-128 absolute bottom-0 right-20 z-10"
                  src={interview.interview.imageUrl}
                  alt=""
                />
                <h1
                  className="absolute top-20 text-5xl text-black p-2 font-bold rounded-lg w-140 text-left z-20 left-10"
                  id="current-interview-title"
                >
                  {umlauteErsetzen(interview.interview.headline)}
                </h1>

                <div className="md:w-104 lg:w-128 xl:w-140 absolute bottom-8 left-12 text-black text-left shadow-2xl  p-4 z-20 bg-fm_weiss rounded-lg opacity-70">
                  {interview.interview.textTeaser}
                </div>
                <FaQuoteRight
                  className="absolute top-14 rotate-180 text-4xl  z-10 left-2 "
                  size={70}
                  style={{ color: interview.interview.quotationMarkColor }}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="md:hidden">
        <div
          className="w-full h-fit"
          style={{ backgroundColor: interview.interview.backgroundColor }}
        >
          <div
            className=" relative text-black font-bold rounded-lg text-2xl text-left p-8 z-10 heading-koulen-black "
            id="current-interview-title"
          >
            <FaQuoteRight
              className="absolute left-4 top-4 rotate-180  text-4xl  -z-10 "
              size={30}
              style={{ color: interview.interview.quotationMarkColor }}
            />
            {umlauteErsetzen(interview.interview.headline)}
          </div>

          <div className="w-fit mx-auto">
            <img
              className="  h-64 object-cover p-4 pb-0"
              src={interview.interview.imageUrl}
              alt=""
            />
          </div>
          <div className=" bg-fm_weiss text-black text-left text-left bg-opacity-50 p-4">
            {interview.interview.textTeaser}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentInterview;
