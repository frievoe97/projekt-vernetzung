import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
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
  const [prevIndex, setPrevIndex] = useState(null);
  const [isWideScreen, setIsWideScreen] = useState(false);

  // let prevIndex = null;

  // Diese Funktion setzt den Zustand isWideScreen basierend auf der Bildschirmbreite
  const checkScreenWidth = () => {
    setIsWideScreen(window.innerWidth > 840);
  };

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
    adaptiveHeight: false,
  };

  // Effekt für das Zurücksetzen des ausgewählten Index nach Inaktivität.
  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    let timeoutId;

    const resetClickedCardIndex = () => {
      if (!userClicked && isWideScreen) {
        const randomIndex = Math.floor(Math.random() * data.data.length);
        setClickedCardIndex(randomIndex);
      }
    };

    const cardTimeout = 2500; // 5 Sekunden Inaktivität (kann angepasst werden)
    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(resetClickedCardIndex, cardTimeout);
    };

    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [clickedCardIndex, userClicked, data]);

  const handleUserClick = (index) => {
    console.log(index, prevIndex, clickedCardIndex);
    if (clickedCardIndex == null) {
      setClickedCardIndex(index);
    } else {
      if (prevIndex != index) {
        setClickedCardIndex(index);
      } else {
        setClickedCardIndex(null);
      }
    }

    setPrevIndex(index);
    setUserClicked(true);
    settings.autoplay = false;
  };

  return (
    <div className="w-full bg-fm_helles_beige">
      <div className="max-w-screen-xl mx-auto md:p-4">
        {/* Desktop-Ansicht */}
        {/* <div className="my-8 md:block hidden">
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
        </div> */}
        <div className="my-8 md:flex hidden">
          {data.data.map((item, index) => (
            <div
              key={index}
              className={`p-0 cursor-pointer h-full ${
                index === clickedCardIndex ? "flex-2" : "flex-1"
              }`}
              onClick={() => handleUserClick(index)}
            >
              <ReactCardFlip
                key={index}
                className=" h-full"
                isFlipped={index === clickedCardIndex}
                // isFlipped={true}
                flipDirection="horizontal"
              >
                <div className="p-4 h-72 flex  items-center ">
                  <div className="mx-auto">
                    <img
                      className="h-20 object-cover p-4 pt-0 mx-auto"
                      src={item.iconPath}
                      alt={`Icon ${index + 1}`}
                    />
                    <h2 className="font-bold text-center flex-grow">
                      {item.title}
                    </h2>
                  </div>
                </div>

                <div className="p-4 h-72 flex items-center ">
                  <div>
                    <p className="leading-7">{item.text}</p>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>

        {/* Mobile-Ansicht 
        block md:hidden */}
        <div className="md:hidden">
          <Slider {...settings} className="h-full" adaptiveHeight={false}>
            {data.data.map((item, index) => (
              <div
                key={index}
                className={`p-0 cursor-pointer h-full`}
                onClick={() => handleUserClick(index)}
              >
                <ReactCardFlip
                  className="h-full"
                  isFlipped={index === clickedCardIndex}
                  flipDirection="horizontal"
                  containerStyle={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                  }}
                  cardStyle={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div className="p-4 h-72 flex  items-center">
                    <div className="mx-auto">
                      <img
                        className="h-20 object-cover p-4 pt-0 mx-auto"
                        src={item.iconPath}
                        alt={`Icon ${index + 1}`}
                      />
                      <h2 className="font-bold text-center flex-grow">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-4 h-72 flex items-center">
                    <div>
                      <p className="leading-7">{item.text}</p>
                    </div>
                  </div>
                </ReactCardFlip>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default IconTextRows;
