import React from "react";

const MotivationAusEigenerErfahrung = ({ data }) => {
  if (!data) {
    return null;
  }

  const { title, imageUrl, paragraphs } = data;

  return (
    <div className="w-full bg-fm_weiss">
      <div className="py-8 md:py-14 max-w-screen-xl mx-auto">
        <div className="hidden md:flex">
          <div className="md:w-1/2 p-4">
            <img src={imageUrl} alt="Bild" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 p-4">
            <h1 className="heading text-center md:text-right w-full mb-4">
              {title}
            </h1>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-center md:text-right mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="md:hidden flex flex-col">
          <h1 className="mb-4 heading text-center md:text-left mx-4">
            {title}
          </h1>
          <div className="p-4 px-6">
            <img
              src={imageUrl}
              alt="Bild"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="p-4 px-6 text-left mb-1">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotivationAusEigenerErfahrung;
