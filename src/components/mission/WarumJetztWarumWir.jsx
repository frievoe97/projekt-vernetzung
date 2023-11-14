import React from "react";

const WarumJetztWarumWir = ({ data }) => {
  if (!data) {
    return null; // Wenn keine Daten vorhanden sind, nichts anzeigen
  }

  return (
    <div className="w-full bg-fm_weiss">
      <div className="max-w-screen-xl mx-auto text-justify p-4 pb-16">
        {data.map((item, index) => (
          <div key={index}>
            <h2 className="font-bold mt-8 mb-4 text-fm_blau">
              {item.paragraph[0].title}
            </h2>

            {item.paragraph[1].text.map((item, index) => (
              <div key={index}>
                <p className="mb-4">{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarumJetztWarumWir;
