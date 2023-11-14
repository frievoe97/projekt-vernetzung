import React from "react";

const PictureHeaderGlossary = ({ data }) => {
  if (!data) {
    return null;
  }
  const { imageUrl, title, subtitle, descriptions, offlineImageUrl } = data;

  // let image =
  //   "http://localhost:8000/projekt-vernetzen/images/" + offlineImageUrl;

  return (
    <div
      className="py-0 md:py-8 md:px-4"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
    >
      <div className="max-w-screen-xl mx-auto bg-white text-justify md:text-center rounded">
        <div
          className="block md:hidden relative flex flex-col justify-center items-center "
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-2xl font-bold text-fm_blau mb-4 z-10 relative bg-fm_weiss py-2 px-4 rounded-lg mt-8">
            {title}
          </h1>
          <h2 className="text-lg font-semibold bg-fm_weiss m-4 p-2 rounded-lg mb-8 text-center">
            {subtitle}
          </h2>
        </div>

        <div className="p-4 ">
          <h1 className="md:block hidden text-2xl font-bold text-fm_blau mb-4">
            {title}
          </h1>
          <h2 className="md:block hidden text-lg font-semibold">{subtitle}</h2>
          {descriptions.map((description, index) => (
            <p key={index} className="mt-4">
              {description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureHeaderGlossary;
