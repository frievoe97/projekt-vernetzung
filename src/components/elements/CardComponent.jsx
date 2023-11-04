import React from "react";
import Tags from "./Tags"; // Annahme: Hier wird die TagComponent importiert

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

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 text-base">{title}</h2>
          <p className="text-black mb-4">{text}</p>
          <a href={link} className="text-base text-black hover:text-black">
            Mehr erfahren
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
