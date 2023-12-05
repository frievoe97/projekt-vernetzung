import React from "react";
import ButtonBigRounded from "../elements/ButtonBigRounded";

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
      <div className="py-4 max-w-screen-xl mx-auto">
        <div className="hidden md:flex">
          <div className="md:w-1/2 p-4">
            <img src={imageUrl} alt="Bild" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 p-4">
            <h1 className="heading-black text-center md:text-right w-full mb-4">
              {title}
            </h1>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-center md:text-right mb-4">
                {paragraph}
              </p>
            ))}
            {/* <div className="flex justify-center md:justify-start">
              <ButtonBigRounded buttonText={buttonText} link={buttonLink} />
            </div> */}
          </div>
        </div>
        <div className="md:hidden flex flex-col">
          <h1 className="mb-4 heading-black text-center md:text-left">
            {title}
          </h1>
          <div className="p-4">
            <img
              src={imageUrl}
              alt="Bild"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="p-4 text-justify mb-1">
              {paragraph}
            </p>
          ))}
          {/* <div className="flex justify-center md:justify-start">
            <ButtonBigRounded buttonText={buttonText} link={buttonLink} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MotivationAusEigenerErfahrung;
