import React from "react";
import Tags from "./Tags"; // Annahme: Hier wird die TagComponent importiert

const CardComponent = ({ imageUrl, title, text, link, tags }) => {
  return (
    <div className="w-96 p-4 shrink-0 ">
      <div className="bg-white rounded-xl shadow-lg drop-shadow-xl overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4 text-base h-12">{title}</h2>
          <p className="text-gray-700 mb-4">{text}</p>
          <div className="mb-4">
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <Tags
                    key={index}
                    tag={tag}
                    removable={false} // Hier kannst du den removable-Parameter anpassen
                  />
                ))}
              </div>
            )}
          </div>
          <a href={link} className="text-blue-500 hover:underline">
            Mehr erfahren
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
