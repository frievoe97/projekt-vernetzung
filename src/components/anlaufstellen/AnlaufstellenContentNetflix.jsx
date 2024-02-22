import React, { useState, useEffect } from "react"; // Stellen Sie sicher, dass useState hier importiert wird
import CustomCard from "../elements/CustomCard";
import { useGlobalState } from "../../data/GlobalState";
import "./anlausstellenStyle.css";
import ResponsiveCard from "../elements/ResponsiveCard";

/**
 * Anzeige von Anlaufstelleninhalten in einem Rasterformat.
 * @returns {JSX.Element} - Eine React-Komponente zur Anzeige von Anlaufstelleninhalten im Rasterformat.
 */
const AnlaufstellenContentNetflix = () => {
  const { state } = useGlobalState();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openOverlay = (card) => {
    setSelectedCard(card);
    setIsOverlayVisible(true);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
    setSelectedCard(null);
  };

  // Scrollen im Hintergrund verhindern, wenn das Overlay geöffnet ist
  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOverlayVisible]);

  // Ladeanzeige, wenn die Daten noch nicht geladen wurden
  if (!state.anlaufstellenFromSanity) {
    return <div></div>;
  }

  console.log(state.anlaufstellenFromSanity);

  return (
    <div>
      <div className="relative w-full px-0">
        <div className="">
          <div className="max-w-screen-xl mx-auto my-20">
            {/* <div className="w-full"> */}
            {state.anlaufstellenFromSanity.map((row, rowIndex) => (
              <div key={rowIndex} className="mb-0 divide-y-2 divide-fm_rosa">
                {/* Rendere den Abschnitt nur, wenn row.Name nicht leer ist */}
                {row.Anlaufstelle != null && row.Anlaufstelle.length > 0 && (
                  <>
                    <h2 className="text-xl text-left font-bold my-2 ml-4 ">
                      {row.Kategorie}
                    </h2>

                    <div className="flex overflow-x-auto items-stretch flex-row scroll-container py-4">
                      {row.Anlaufstelle.map((card, index) => (
                        <div key={index} onClick={() => openOverlay(card)}>
                          <CustomCard
                            imageUrl={card.logo}
                            title={card.title}
                            text={card.text}
                            link={card.link}
                            tags={card.Tags}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* {isOverlayVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 bg-black">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <ResponsiveCard
              logoUrl={selectedCard.Logo}
              name={selectedCard.Name}
              link={selectedCard.Link}
              onClose={closeOverlay}
            />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AnlaufstellenContentNetflix;
