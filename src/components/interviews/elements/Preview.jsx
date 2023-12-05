import React from "react";
import { Link } from "react-router-dom"; // Importiere die Link-Komponente

import { FaQuoteRight } from "react-icons/fa6";
import "./Preview.css";

const Preview = ({ imageUrl, title, textTeaser }) => {
  // Ersetze Leerzeichen durch Bindestriche und konvertiere zu Kleinbuchstaben
  const convertToSlug = (inputString) => {
    return inputString.replace(/\s+/g, "-").toLowerCase();
  };

  return (
    <div className="w-80 h-80 bg-fm_blau relative overflow-hidden rounded shadow-2xl">
      <Link
        className="absolute top-0 bottom-0 left-0 right-0 z-10"
        to={"/interviews-und-beitraege/" + convertToSlug(title)}
      ></Link>
      {/* id="preview-title" */}
      <h2 className="text-2xl font-bold text-left text-fm_weiss m-4">
        {title}
      </h2>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute top-24 left-8 h-full w-full bg-white rounded-full overflow-hidden">
          <img
            src={imageUrl}
            alt="Card Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="absolute bottom-0">
        <div className="relative m-4 text-white">
          <FaQuoteRight className="absolute -top-5 -left-1 text-4xl" />
          <div className="m-4 ml-7 bg-blue-500 bg-opacity-70 shadow-xl rounded p-1">
            {textTeaser}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
