import React from "react";
import ButtonBigRounded from "../elements/ButtonBigRounded";

/**
 * Diese Komponente rendert die Motivation aus eigener Betroffenenerfahrung.
 * @param {Object} props - Die Props für die Motivation-Daten.
 * @param {Object} props.data - Die Daten für die Motivation.
 * @param {string} props.data.title - Der Titel des Abschnitts.
 * @param {string} props.data.imageUrl - Die URL des Bildes.
 * @param {string[]} props.data.paragraphs - Ein Array von Textabschnitten.
 * @param {string} props.data.buttonText - Der Text für den Button.
 * @param {string} props.data.buttonLink - Der Link für den Button.
 * @returns {JSX.Element} - Die gerenderte MotivationAusEigenerErfahrung-Komponente.
 */
const MotivationAusEigenerErfahrung = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    title,
    imageUrl,
    paragraphs,
    buttonText,
    buttonLink,
    offlineImageUrl,
  } = data;

  return (
    <div className="w-full bg-fm_weiss">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="p-4">
          <img
            // src={imageUrl}
            src={imageUrl}
            alt="Bild"
            className="w-full h-auto max-w-lg mx-auto"
          />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-fm_blau">{title}</h1>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-justify">
            {paragraph}
          </p>
        ))}
        <div className="mb-8  text-left">
          <ButtonBigRounded buttonText={buttonText} link={"/"} />
        </div>
      </div>
    </div>
  );
};

export default MotivationAusEigenerErfahrung;
