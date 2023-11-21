import React from "react";
import ButtonBigRounded from "../elements/ButtonBigRounded";

/**
 * Diese Komponente rendert Wissensvermittlung durch die Stimmen Dritter.
 * @param {Object} props - Die Props für die Wissensvermittlung-Daten.
 * @param {Object} props.data - Die Daten für die Wissensvermittlung.
 * @param {string} props.data.title - Der Titel des Abschnitts.
 * @param {string[]} props.data.paragraphs - Ein Array von Textabschnitten.
 * @param {string} props.data.buttonText - Der Text für den Button.
 * @param {string} props.data.buttonLink - Der Link für den Button.
 * @returns {JSX.Element} - Die gerenderte Wissensvermittlung-Komponente.
 */
const Wissensvermittlung = ({ data }) => {
  if (!data) {
    return null;
  }

  const { title, paragraphs, buttonText, buttonLink } = data;

  return (
    <div className="w-full bg-fm_helles_beige">
      <div className="max-w-screen-xl mx-auto p-4">
        <h1 className="heading-black my-4">{title}</h1>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-justify">
            {paragraph}
          </p>
        ))}
        <div className="mb-8 flex justify-center md:justify-start">
          <ButtonBigRounded buttonText={buttonText} link={"/wip"} />
        </div>
      </div>
    </div>
  );
};

export default Wissensvermittlung;
