import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import Slider from "react-slick";

// Daten für die Karten
const data = [
  {
    iconPath: "/icons/bank.svg",
    title: "Die Perspektive der Wissenschaft:",
    text: "Betroffene könnten die eigene Situation ggf. früher als solche erkennen, Angriffe objektivieren und weniger persönlich nehmen, wenn sie um die einschlägige Studienlage zu gängigem Täterverhalten und psychosozialen Konsequenzen für Betroffene wüssten. Dies würde Betroffene gleichzeitig auch zu mehr Handlungsfähigkeit verhelfen.",
  },
  {
    iconPath: "/icons/heart.svg",
    title: "Die Perspektive der Medizin und klinischen Psychologie:",
    text: "Viele Betroffene erleben schleichende Gesundheits- und Wesensveränderungen, die sie zu spät als eindeutige Konsequenz der Gewalteinwirkung ihnen gegenüber reflektieren. Jedoch sind Gewalterfahrungen nicht selten auch körperliche Erfahrungen.",
  },
  {
    iconPath: "/icons/justice.svg",
    title: "Die Perspektive der Justiz:",
    text: "Betroffene werden auf absehbare Zeit mit überlasteten Institutionen der Justiz und Strafverfolgung konfrontiert sein, die meist nicht auf Fälle von Gewalteinwirkung im Kontext von Machtmissbrauch spezialisiert sind. Viele Täter kennen hingegen ihre strafrechtlich relevanten Grenzen sehr genau. Eine frühe gerichtsverwertbare Dokumentation kann Betroffenen zumindest bedingt helfen.",
  },
  {
    iconPath: "/icons/like-dislike.svg",
    title: "Die Perspektive relevanter Vereine und Organisationen:",
    text: "Betroffene können eine Vielzahl an engagierten Vereinen und Organisationen zur eigenen Situation und Handlungsmöglichkeiten, aber auch zur Abhilfe in Akutsituationen einbinden. Viele helfen kostenfrei. Wir zeigen dir, welche Anlaufstellen es gibt.",
  },
  {
    iconPath: "/icons/teacher.svg",
    title: "Die Perspektive (ehemals) Betroffener und von Aktivist:innen:",
    text: "Gerade Betroffene weniger sichtbarer Formen von Gewalt haben es schwerer, sich als solche zu identifizieren und die eigenen Erlebnisse in Worte zu fassen. Erfahrungsberichte anderer fassen das Erlebte in Worte und bieten so häufig erste Anlaufstellen für Austausch. Wir zeigen dir, welche Anlaufstellen es gibt.",
  },
  {
    iconPath: "/icons/search-status.svg",
    title: "Die Perspektive (ehemals) Betroffener und von Aktivist:innen:",
    text: "Gerade Betroffene weniger sichtbarer Formen von Gewalt haben es schwerer, sich als solche zu identifizieren und die eigenen Erlebnisse in Worte zu fassen. Erfahrungsberichte anderer fassen das Erlebte in Worte und bieten so häufig erste Anlaufstellen für Austausch. Wir zeigen dir, welche Anlaufstellen es gibt.",
  },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: false,
};

const IconTextRows = () => {
  // State zum Verfolgen der angeklickten Karte
  const [clickedCardIndex, setClickedCardIndex] = useState(null);

  const [userClicked, setUserClicked] = useState(false);

  useEffect(() => {
    let timeoutId;

    // Funktion zum Zurücksetzen des Index, nachdem der Nutzer inaktiv war
    const resetClickedCardIndex = () => {
      console.log(userClicked);
      if (!userClicked) {
        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(randomIndex);
        setClickedCardIndex(randomIndex);
      }
    };

    // Setze einen Timeout, um `resetClickedCardIndex` nach einer bestimmten Zeit auszuführen
    const cardTimeout = 3000; // 5 Sekunden Inaktivität (kann angepasst werden)
    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(resetClickedCardIndex, cardTimeout);
    };

    // Führe `resetTimer` aus, wenn der `clickedCardIndex` aktualisiert wird
    resetTimer();

    return () => {
      // Räume den Timer auf, wenn das Komponente unmontiert wird
      clearTimeout(timeoutId);
    };
  }, [clickedCardIndex, userClicked]);
  // Funktion, um den Nutzerklick zu verarbeiten
  const handleUserClick = (index) => {
    setClickedCardIndex(index);
    setUserClicked(true);
  };

  return (
    <div className="w-full bg-fm_helles_beige">
      <div className="max-w-screen-xl mx-auto md:p-4 ">
        <div className="my-8 md:block hidden">
          {data.map((item, index) => (
            <div className="flex items-start mb-8" key={index}>
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  className="w-32 object-cover p-4 pt-2"
                  src={item.iconPath}
                  alt={`Icon ${index + 1}`}
                />
              </div>
              <div className="flex-1">
                <p className="text-left">
                  <span className="font-bold">{item.title}</span> {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="block md:hidden">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <img
                  className="w-24 object-cover mx-auto pt-4"
                  src={item.iconPath}
                  alt={`Icon ${index + 1}`}
                />
                <div className="flex-1 p-4">
                  <p className="text-left font-bold mb-2">{item.title}</p>
                  <p className="text-justify">{item.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* <div className="grid grid-cols-2 gap-0 block md:hidden border-2 border-black">
          {data.map((item, index) => (
            <div
              key={index}
              className={`p-0 cursor-pointer border-2 border-black h-full ${
                index === clickedCardIndex
                  ? "bg-fm_helles_beige"
                  : "bg-fm_weiss"
              }`}
              onClick={() => handleUserClick(index)}
            >
              <ReactCardFlip
                className="h-full"
                isFlipped={index === clickedCardIndex}
                flipDirection="horizontal"
                containerStyle={{
                  width: "100%",
                  minHeight: "350px",
                }}
                cardStyle={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="p-4 h-full">
                  <div className="h-full">
                    <img
                      className="h-20 object-cover p-4 pt-2 mx-auto mt-4"
                      src={item.iconPath}
                      alt={`Icon ${index + 1}`}
                    />
                    <h2 className="font-bold">{item.title}</h2>
                  </div>
                </div>
                <div className="p-4 h-full">
                  <p className="text-justify">{item.text}</p>
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default IconTextRows;
