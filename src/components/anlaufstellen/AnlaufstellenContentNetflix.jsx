import React from "react";
import CardComponent from "../elements/CardComponent";
import CustomCard from "../elements/CustomCard";
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
    return <div></div>;
  }

  return (
    <div className="w-full px-0">
      <div className="">
        <div className="w-full">
          {state.anlaufstellenData.googleDoc.map((row, rowIndex) => (
            <div key={rowIndex} className="mb-0 divide-y-2 divide-black">
              {/* Rendere den Abschnitt nur, wenn row.Name nicht leer ist */}
              {row.Anlaufstelle != null && row.Anlaufstelle.length > 0 && (
                <>
                  <h2 className="text-xl text-left font-bold my-2 ml-4">
                    {row.Kategorie}
                  </h2>

                  <div className="flex overflow-x-auto items-stretch flex-row scroll-container py-4">
                    {row.Anlaufstelle.map((card, index) => (
                      <CustomCard
                        key={index}
                        imageUrl={card.Logo}
                        title={card.Name}
                        text={card.text}
                        link={card.Link}
                        tags={card.Tags}
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
