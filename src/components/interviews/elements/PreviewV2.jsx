import React from "react";
import { Link } from "react-router-dom"; // Importiere die Link-Komponente
import "./PreviewV2.css";

const PreviewV2 = ({ imageUrl, title, textTeaser, bgColor }) => {
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

  // 40 - 10rem
  // 128 - 30rem
  // 88 - 20rem

  return (
    <div>
      <div className="md:flex hidden">
        <div className="w-96 h-140 flex flex-col relative rounded-2xl shadow-2xl interview-preview-container mx-auto">
          <div
            className="w-full h-40 bg-fm_blau_light rounded-t-2xl relative overflow-hidden"
            style={{ backgroundColor: bgColor }}
          >
            <img
              className="h-48  object-cover absolute left-1/2 transform -translate-x-1/2 bottom-0  "
              src={imageUrl}
              alt=""
            />
          </div>
          <div className="p-4 flex h-104 flex-col">
            <p className="text-base font-bold mb-4">Interview</p>
            <h1 className="text-2xl font-black text-left mb-4">{title}</h1>
            <p className="text-black font-light mb-4 overflow-y-hidden text-left">
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
      </div>
      <div className="md:hidden">
        <div className="w-11/12 mx-auto h-fit flex flex-col relative rounded-2xl shadow-2xl interview-preview-container">
          <div
            className="w-full h-40  rounded-t-2xl relative overflow-hidden"
            style={{ backgroundColor: bgColor }}
          >
            <img
              className="h-48  object-cover absolute left-1/2 transform -translate-x-1/2 bottom-0  "
              src={imageUrl}
              alt=""
            />
          </div>
          <div className="p-4 flex h-fit flex-col">
            <p className="text-left font-bold mb-4">Interview</p>
            <h1 className="text-2xl font-black text-left mb-4 hyphens-auto">
              {title}
            </h1>
            <p className="text-black font-light mb-4 overflow-y-hidden text-left">
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
      </div>
    </div>
  );
};

export default PreviewV2;
