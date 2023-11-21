import React from "react";

/**
 * Diese Komponente rendert den Missionstitel.
 * @param {Object} props - Die Props für den Missionstitel.
 * @param {Object} props.data - Die Daten für den Missionstitel.
 * @param {string} props.data.title - Der Titel des Abschnitts.
 * @param {string[]} props.data.paragraphs - Ein Array von Textabschnitten.
 * @returns {JSX.Element} - Die gerenderte MissionTitel-Komponente.
 */
const MissionTitel = ({ data }) => {
  if (!data) {
    return null;
  }

  const { title, paragraphs } = data;

  return (
    <div className="w-full bg-fm_weiss">
      <div className="max-w-screen-xl mx-auto md:p-4 text-left p-4">
        <h2 className="my-4 heading">{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MissionTitel;
