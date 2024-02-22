import React from "react";

const MissionTitel = ({ data }) => {
  if (!data) {
    return null;
  }

  const { title, paragraphs1, paragraphs2, list } = data;

  return (
    <div className="w-full bg-fm_weiss py-12">
      <div className="max-w-screen-xl mx-auto md:p-4 text-left p-4">
        <h2 className="my-4 heading">{title}</h2>
        {paragraphs1.map((paragraph, index) => (
          <p key={index} className="mb-4 text-justify">
            {paragraph}
          </p>
        ))}
        <p className="mb-4 text-justify">{list[0].text}</p>
        <ul className="mb-4" style={{ listStyleType: "disc" }}>
          {list[1].elements.map((item, index) => (
            <li key={index} className="ml-4 mb-2 text-justify">
              {item}
            </li>
          ))}
        </ul>

        {paragraphs2.map((paragraph, index) => (
          <p key={index} className="mb-4 text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MissionTitel;
