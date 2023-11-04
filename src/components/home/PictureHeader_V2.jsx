import React from "react";

/**
 * Diese Komponente rendert einen Bildkopf (Header) mit dynamischen Daten.
 * @param {Object} data - Die Daten für den Bildkopf, einschließlich Titel, Untertitel, Beschreibung und Liste von Elementen.
 * @param {string} data.imageUrl - Die URL für das Hintergrundbild.
 * @param {string} data.text.title - Der Titel des Bildkopfs.
 * @param {string} data.text.subtitle - Der Untertitel des Bildkopfs.
 * @param {string} data.text.description - Die Beschreibung des Bildkopfs.
 * @param {string[]} data.text.listItems - Eine Liste von Elementen für den Bildkopf.
 * @returns {JSX.Element|null} - Die gerenderte Bildkopf-Komponente oder null, wenn keine Daten vorhanden sind.
 */
function PictureHeader_V2({ data }) {
  // Überprüfe, ob die Daten vorhanden sind
  if (!data) {
    return null; // Wenn keine Daten vorhanden sind, nichts anzeigen
  }

  const { title, subtitle, description, listItems } = data.text;
  const imageUrl = data.imageUrl;

  return (
    <div
      className="py-0 md:py-8 md:px-4"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="max-w-screen-xl mx-auto bg-white p-4 text-justify md:text-center rounded">
        <h1 className="text-2xl font-bold text-left md:text-center text-fm_blau mb-4">
          {title}
        </h1>
        <h2 className="text-lg font-semibold">{subtitle}</h2>
        <p className="mt-4">{description}</p>
        <p className="mt-4">
          Indem wir fachübergreifendes Wissen bündeln, möchten wir für
          Betroffene, ihr Umfeld sowie die Öffentlichkeit:
        </p>
        <ul className="list-disc ml-4 md:ml-6 mt-2">
          {listItems.map((item, index) => (
            <li key={index} className="text-left w-fit mx-auto">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PictureHeader_V2;
