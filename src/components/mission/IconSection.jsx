import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IconTextRows = ({ data }) => {
  if (!data) {
    return null; // Wenn keine Daten vorhanden sind, nichts anzeigen
  }

  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const [userClicked, setUserClicked] = useState(false);

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

  useEffect(() => {
    let timeoutId;

    const resetClickedCardIndex = () => {
      if (!userClicked) {
        const randomIndex = Math.floor(Math.random() * data.length);
        setClickedCardIndex(randomIndex);
      }
    };

    const cardTimeout = 3000; // 5 Sekunden Inaktivität (kann angepasst werden)
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
      <div className="max-w-screen-xl mx-auto md:p-4 ">
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
