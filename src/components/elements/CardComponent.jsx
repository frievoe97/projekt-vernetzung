import React from "react";
import Tags from "./Tags";
import ButtonSmallRounded from "./ButtonSmallRounded";
import "./CardComponent.css";

const CardComponent = ({ imageUrl, title, text, link, tags }) => {
  return (
    <div className="w-80 md:w-96 p-4 shrink-0 mx-auto md:mx-0">
      <div className="bg-fm_weiss rounded-xl shadow-lg drop-shadow-xl overflow-hidden">
        <div className="w-full h-40 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform transform-gpu hover:scale-125"
          />
        </div>

        <div className="p-4 ">
          <h1 className="text-lg font-semibold mb-4 text-base text-left custom-break-word">
            {title}
          </h1>

          <p className="text-black mb-4">{text}</p>
          <div className="flex">
            <ButtonSmallRounded buttonText="Mehr erfahren" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
