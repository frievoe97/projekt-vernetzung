import React, { useState } from "react"; // Stellen Sie sicher, dass useState hier importiert wird
import CardComponent from "../elements/CardComponent";
import CustomCard from "../elements/CustomCard";
import { useGlobalState } from "../../data/GlobalState";
import { useSpring, animated } from "react-spring";
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

  // Zustand für die Sichtbarkeit der Extra-Card
  const [isExtraCardVisible, setExtraCardVisible] = useState(false);

  // Animationswerte für die Extra-Card
  const extraCardProps = useSpring({
    opacity: isExtraCardVisible ? 1 : 0,
    transform: isExtraCardVisible ? "scale(1)" : "scale(0.8)",
  });

  // Funktion, die aufgerufen wird, wenn auf eine Card geklickt wird
  const handleCardClick = () => {
    // Setzen Sie den Zustand, um die Extra-Card sichtbar zu machen
    setExtraCardVisible(true);
  };

  return (
    <div className="relative w-full px-0">
      <div className="">
        <div className="w-full">
          {state.anlaufstellenData.googleDoc.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="mb-0 divide-y-2 divide-black"
              onClick={handleCardClick}
            >
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
                        onClick={handleCardClick} // Fügen Sie den Klick-Handler hinzu
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hier fügen Sie die Extra-Card hinzu und verwenden react-spring für die Animation */}
      {/* <animated.div
        style={{
          ...extraCardProps,
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          zIndex: 50,
          display: isExtraCardVisible ? "block" : "none",
        }}
      >
        <CustomCard
          imageUrl="URL_zum_Bild"
          title="Fullscreen Card"
          text="Dies ist eine Vollbild-Karte."
          link="/fullscreen"
          tags={["Vollbild", "Card"]}
        />
      </animated.div> */}
    </div>
  );
};

export default AnlaufstellenContentNetflix;
