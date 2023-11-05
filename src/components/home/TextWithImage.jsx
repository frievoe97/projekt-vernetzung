import React from "react";
import ButtonBigRounded from "../elements/ButtonBigRounded";

/**
 * Diese Komponente rendert Text mit einem Bild und einem Button.
 * @param {Object} props - Die Props für den Text, das Bild und den Button.
 * @param {Object} props.data - Die Daten für den Text, das Bild und den Button.
 * @param {string} props.data.title - Der Titel des Texts.
 * @param {string[]} props.data.text - Ein Array von Textabschnitten.
 * @param {string[]} props.data.imageUrls - Ein Array von Bild-URLs.
 * @param {string} props.data.buttonText - Der Text für den Button.
 * @param {string} props.data.buttonLink - Der Link für den Button.
 * @returns {JSX.Element|null} - Die gerenderte TextWithImage-Komponente oder null, wenn keine Daten vorhanden sind.
 */
const TextWithImage = ({ data }) => {
  if (!data) {
    return null;
  }

  const { title, text, imageUrls, buttonText, buttonLink } = data;

  return (
    <div className="w-full bg-fm_weiss">
      <div className="py-4 max-w-screen-xl mx-auto">
        {/* Erste Zeile mit Überschrift */}
        <div className="p-4">
          <h1 className="text-2xl font-bold text-left">{title}</h1>
          {/* Rechte Spalte mit Bild auf Handys */}
          <div className="lg:w-1/3 p-4 lg:pl-8 lg:hidden">
            <img
              src={imageUrls}
              alt="Bild"
              className="w-full h-auto max-w-xs mx-auto"
            />
          </div>
        </div>

        {/* Zweite Zeile mit zwei Spalten */}
        <div className="flex flex-col lg:flex-row-reverse">
          {/* Rechte Spalte mit Bild auf großen Bildschirmen */}
          <div className="lg:w-1/3 p-4 lg:pl-8 hidden lg:block">
            <img src={imageUrls} alt="Bild" className="w-full h-auto" />
          </div>

          {/* Linke Spalte mit Text und Button */}
          <div className="lg:w-2/3 p-4">
            {text.map((paragraph, index) => (
              <p key={index} className="text-justify mb-4">
                {paragraph}
              </p>
            ))}
            <ButtonBigRounded buttonText={buttonText} link={buttonLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextWithImage;
