import React from "react";

const WarumJetztWarumWir = ({ data }) => {
  if (!data) {
    return null; // Wenn keine Daten vorhanden sind, nichts anzeigen
  }

  console.log(data);

  const { warumJetzt, warumWir, kontaktText } = data;

  return (
    <div className="w-full bg-fm_weiss">
      <div className="max-w-screen-xl mx-auto text-justify p-4 pb-16">
        {warumJetzt.length > 0 &&
          warumJetzt.map((item, index) => (
            <div key={index}>
              <h2 className="font-bold mt-8 mb-4">{item.title}</h2>
              <p className="mb-4">{item.text}</p>
            </div>
          ))}

        {warumWir.length > 0 &&
          warumWir.map((item, index) => (
            <div key={index}>
              <h2 className="font-bold mt-8 mb-4">{item.title}</h2>
              <p className="mb-4">{item.text}</p>
            </div>
          ))}

        {kontaktText.length > 0 &&
          kontaktText.map((item, index) => (
            <div key={index}>
              <h2 className="font-bold mt-8 mb-4">{item.title}</h2>
              <p className="mb-4">{item.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WarumJetztWarumWir;
