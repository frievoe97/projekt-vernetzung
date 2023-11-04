import React from "react";
import CardComponent from "../elements/CardComponent";
import { useGlobalState } from "../../data/GlobalState";
import "./anlausstellenStyle.css";

/**
 * Anzeige von Anlaufstelleninhalten in einem Rasterformat.
 * @returns {JSX.Element} - Eine React-Komponente zur Anzeige von Anlaufstelleninhalten im Rasterformat.
 */
const AnlaufstellenContentNetflix = () => {
  // Holen Sie den globalen Zustand mit anlaufstellenData
  const { state } = useGlobalState();

  // Ladeanzeige, wenn die Daten noch nicht geladen wurden
  if (!state.anlaufstellenData.googleDoc) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full px-0 md:px-12">
      <div className="">
        <div className="w-full">
          {state.anlaufstellenData.googleDoc.map((row, rowIndex) => (
            <div key={rowIndex} className="mb-0 divide-y-2 divide-black">
              {/* Rendere den Abschnitt nur, wenn row.Name nicht leer ist */}
              {row.Name.length > 0 && (
                <>
                  <h2 className="text-xl text-left font-bold my-2 ml-4 md:ml-0">
                    {row.Kategorie}
                  </h2>

                  <div className="flex overflow-x-auto items-stretch flex-row scroll-container pb-4">
                    {row.Name.map((card, index) => (
                      <CardComponent
                        key={index}
                        imageUrl={`https://picsum.photos/200/300?random=${
                          (rowIndex + 1) * (index + 1)
                        }`}
                        title={card.Name}
                        text={card.text}
                        link={card.link}
                        tags={card.Tagss}
                        removable={false}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnlaufstellenContentNetflix;
