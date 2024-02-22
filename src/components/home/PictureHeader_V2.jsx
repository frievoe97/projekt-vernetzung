import React from "react";
import "./PictureHeader_V2.css";

function PictureHeader_V2({ data }) {
  if (!data) {
    return null;
  }

  const { title, subtitle, description } = data.text;
  const imageUrl = data.imageUrl;

  return (
    <div
      className="py-0 md:pt-16 md:pb-32 md:px-4"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="max-w-screen-xl mx-auto bg-white text-justify md:text-center rounded shadow-2xl">
        <div
          className="block md:hidden relative flex flex-col justify-center items-center "
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          <h1 className="text-center mx-8 mb-4 relative p-2 px-4 rounded-lg mt-8 shadow-2xl heading-koulen bg-fm_weiss">
            {title}
          </h1>

          <div className=" rounded-lg shadow-2xl m-4 p-4 mb-16 bg-fm_weiss">
            <h2 className="text-lg font-semibold  text-center mb-4">
              {subtitle}
            </h2>
            <div>
              {description.map((item, index) => (
                <p key={index} className="text-lg text-center mb-2">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <h1 className="md:block hidden heading-koulen mb-4 ">{title}</h1>
          <h2 className="md:block hidden text-lg font-semibold">{subtitle}</h2>
          <div className="md:block hidden text-lg mt-4">
            {description.map((item, index) => (
              <p key={index} className="text-lg text-center mb-2">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PictureHeader_V2;
