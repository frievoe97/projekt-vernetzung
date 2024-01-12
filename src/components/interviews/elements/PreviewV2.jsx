import React from "react";
import { Link } from "react-router-dom"; // Importiere die Link-Komponente
import "./PreviewV2.css";

const PreviewV2 = ({ imageUrl, title, textTeaser }) => {
  const convertToSlug = (inputString) => {
    return inputString.replace(/\s+/g, "-").toLowerCase();
  };

  // 40 - 10rem
  // 128 - 30rem
  // 88 - 20rem

  return (
    <div className="w-96 h-128 flex flex-col relative rounded-2xl shadow-2xl interview-preview-container">
      <div className="w-full h-40 bg-fm_blau rounded-t-2xl relative overflow-hidden">
        <img
          className="h-48 w-48 object-cover absolute top-1/2 transform -translate-y-1/2 right-0 rounded-l-full shadow-2xl"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="p-4 flex h-88 flex-col">
        <p className="text-base font-bold mb-4">Rubrik</p>
        <h1 className="text-2xl font-black text-left mb-4">{title}</h1>
        <p className="text-black font-light mb-4 overflow-y-hidden">
          {textTeaser}
        </p>

        <Link
          className=""
          to={"/interviews-und-beitraege/" + convertToSlug(title)}
        >
          <p className="font-bold">Weiterlesen</p>
        </Link>
      </div>
    </div>
  );
};

export default PreviewV2;
