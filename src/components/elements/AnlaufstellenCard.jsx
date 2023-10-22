import React from "react";

const AnlaufstellenCard = ({ anlaufstelle }) => {
  return (
    <div
      key={anlaufstelle.id}
      className="p-6 w-full md:w-1/3 lg:w-1/3 xl:w-1/4 border-2 rounded-xl border-black transform hover:scale-105 transition-transform duration-300 hover:shadow-3xl"
    >
      <h2 className="text-xl font-medium mb-4 text-center">
        {anlaufstelle.name}
      </h2>
      <div className="w-full mb-4">
        <img
          className="w-full max-h-72 object-cover mix-blend-multiply"
          src={anlaufstelle.image}
          alt={anlaufstelle.name}
        />
      </div>
      <div className="w-full mb-4">
        <p className="text-gray-600 text-justify">{anlaufstelle.description}</p>
        <div className="text-justify">
          <a
            href={anlaufstelle.link}
            className="text-blue-500 hover:underline block"
          >
            Weitere Informationen
          </a>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center space-x-2">
        {anlaufstelle.tags.map((tag) => (
          <span
            key={tag}
            className="bg-transparent rounded-full px-3 py-1 text-sm text-gray-600 mr-2 border-2 border-black"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnlaufstellenCard;
