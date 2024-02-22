import React from "react";

const Wissensvermittlung = ({ data }) => {
  if (!data) {
    return null;
  }

  const { title, paragraphs } = data;

  return (
    <div className="w-full bg-fm_helles_beige">
      <div className="max-w-screen-xl mx-auto py-8 md:py-14">
        <h1 className="heading-black my-4 px-6">{title}</h1>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-left md:text-center px-6 md:px-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Wissensvermittlung;
