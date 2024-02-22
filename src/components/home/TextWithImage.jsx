import React from "react";
import ButtonBigRounded from "../elements/ButtonBigRounded";

const TextWithImage = ({ data }) => {
  if (!data) {
    return null;
  }

  const { title, text, buttonText, buttonLink } = data;

  return (
    <div className="w-full bg-fm_weiss">
      <div className="py-8 md:py-14 max-w-screen-xl mx-auto">
        <div className="hidden md:flex">
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
          <div className="md:w-1/3 p-4 hidden md:block">
            <img src={data.imageUrls} alt="Bild" className="w-4/5 h-auto" />
          </div>
        </div>
        <div className="md:hidden flex flex-col">
          <div className="p-4 px-6">
            <h1 className="heading text-center">{title}</h1>
            <div className="p-4 my-4">
              <img
                src={data.imageUrls}
                alt="Bild"
                className="w-full h-auto max-w-xs mx-auto"
              />
            </div>
            {text.map((paragraph, index) => (
              <p key={index} className="text-left mb-4">
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
