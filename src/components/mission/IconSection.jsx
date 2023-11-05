import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Eine Komponente für eine Bild-Text-Slideshow.
 *
 * @param {Object} data - Die Daten für die Slideshow.
 * @param {Array} data.data - Ein Array von Slideshow-Einträgen.
 * @returns {JSX.Element|null} - Die Slideshow-Komponente oder null, wenn keine Daten vorhanden sind.
 */
const IconTextRows = ({ data }) => {
  // Wenn keine Daten vorhanden sind oder das Datenarray leer ist, gibt die Komponente null zurück.
  if (!data || data.data.length === 0) {
    return null;
  }

  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const [userClicked, setUserClicked] = useState(false);

  // Konfigurationseinstellungen für den Slider.
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

  // Effekt für das Zurücksetzen des ausgewählten Index nach Inaktivität.
  useEffect(() => {
    let timeoutId;

    const resetClickedCardIndex = () => {
      if (!userClicked) {
        const randomIndex = Math.floor(Math.random() * data.data.length);
        setClickedCardIndex(randomIndex);
      }
    };

    const cardTimeout = 5000; // 5 Sekunden Inaktivität (kann angepasst werden)
    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(resetClickedCardIndex, cardTimeout);
    };

    resetTimer();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [clickedCardIndex, userClicked, data]);

  return (
    <div className="w-full bg-fm_helles_beige">
      <div className="max-w-screen-xl mx-auto md:p-4">
        {/* Desktop-Ansicht */}
        <div className="my-8 md:block hidden">
          {data.data.map((item, index) => (
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

        {/* Mobile-Ansicht */}
        <div className="block md:hidden">
          <Slider {...settings}>
            {data.data.map((item, index) => (
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
      </div>
    </div>
  );
};

export default IconTextRows;
