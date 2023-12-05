import React from "react";
import ButtonBigRounded from "../elements/ButtonBigRounded";

const TextWithImage = ({ data }) => {
  if (!data) {
    return null;
  }

  const { title, text, imageUrls, buttonText, buttonLink, offlineImageUrl } =
    data;

  return (
    <div className="w-full bg-fm_weiss">
      <div className="py-4 max-w-screen-xl mx-auto">
        {/* Auf Laptops (md) */}
        <div className="hidden md:flex">
          {/* Linke Spalte mit Überschrift, Text und Button */}
          <div className="md:w-2/3 p-4">
            <h1 className="heading text-center md:text-left mb-4">{title}</h1>
            {text.map((paragraph, index) => (
              <p key={index} className="text-left mb-4">
                {paragraph}
              </p>
            ))}
            <div className="flex justify-center md:justify-start">
              <ButtonBigRounded buttonText={buttonText} link={buttonLink} />
            </div>
          </div>

          {/* Rechte Spalte mit Bild */}
          <div className="md:w-1/3 p-4 hidden md:block">
            <img src={data.imageUrls} alt="Bild" className="w-full h-auto" />
          </div>
        </div>

        {/* Auf mobilen Geräten (nicht md) */}
        <div className="md:hidden flex flex-col">
          {/* Überschrift, Text und Button untereinander */}
          <div className="p-4">
            <h1 className="heading text-center">{title}</h1>
            {/* Bild */}
            <div className="p-4">
              <img
                src={data.imageUrls}
                alt="Bild"
                className="w-full h-auto max-w-xs mx-auto"
              />
            </div>
            {text.map((paragraph, index) => (
              <p key={index} className="text-justify mb-4">
                {paragraph}
              </p>
            ))}
            <div className="flex justify-center">
              <ButtonBigRounded buttonText={buttonText} link={buttonLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextWithImage;
