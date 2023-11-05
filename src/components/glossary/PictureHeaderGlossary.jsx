import React from "react";

const PictureHeaderGlossary = ({ data }) => {
  if (!data) {
    return null;
  }
  const { imageUrl, title, subtitle, descriptions } = data;

  return (
    <div
      className="py-0 md:py-8 md:px-4"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="max-w-screen-xl mx-auto bg-white p-4 text-justify md:text-center rounded">
        <h1 className="text-2xl font-bold text-fm_blau mb-4">{title}</h1>
        <h2 className="text-lg font-semibold">{subtitle}</h2>
        {descriptions.map((description, index) => (
          <p key={index} className="mt-4">
            {description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PictureHeaderGlossary;
