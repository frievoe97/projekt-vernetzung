import React from "react";

const PictureHeaderGlossary = ({ data }) => {
  if (!data) {
    return null;
  }
  const { imageUrl, title, subtitle, descriptions } = data;

  return (
    <div
      className="py-0 md:py-16 md:px-4"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="max-w-screen-xl mx-auto bg-white text-justify md:text-center rounded-lg shadow-2xl">
        <div
          className="block md:hidden relative flex flex-col justify-center items-center "
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          <h1 className="mb-4 relative py-2 px-4 rounded-lg mt-8 shadow-2xl heading bg-fm_weiss heading-koulen">
            {title}
          </h1>
          <h2 className="text-lg font-semibold bg-fm_weiss m-4 p-2 rounded-lg mb-8 text-center shadow-2xl">
            {subtitle}
          </h2>
        </div>

        <div className="p-4 ">
          <h1 className="md:block hidden heading mb-4 heading-koulen">
            {title}
          </h1>
          <h2 className="md:block hidden text-lg font-semibold">{subtitle}</h2>
          {descriptions.map((description, index) => (
            <p key={index} className="mt-4 px-2">
              {description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureHeaderGlossary;
