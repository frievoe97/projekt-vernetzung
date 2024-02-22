import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./IconSection.css";

const IconTextRows = ({ data }) => {
  if (!data || data.data.length === 0) {
    return null;
  }

  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const [userClicked, setUserClicked] = useState(false);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [clickedCardIndexLaptop, setClickedCardIndexLaptop] = useState(-1);

  const checkScreenWidth = () => {
    setIsWideScreen(window.innerWidth > 840);
  };

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

    const cardTimeout = 2500;
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
    <div className="w-full bg-fm_helles_beige py-16">
      <div className="max-w-screen-xl mx-auto md:p-4">
        <div className="md:flex hidden flex flex-wrap justify-center">
          {data.data.map((item, index) => (
            <div
              key={index}
              className={`w-1/2 xl:w-1/3 px-10 py-8 cursor-pointer items-center
              ${index == data.data.length - 1 ? "mb-0" : "mb-0"}`}
              onClick={() => setClickedCardIndexLaptop(index)}
            >
              <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all">
                <ReactCardFlip
                  className="h-full flex items-center"
                  isFlipped={index === clickedCardIndexLaptop}
                  flipDirection="horizontal"
                  containerStyle={{
                    height: "22rem",
                    minHeight: "fit-content",
                  }}
                  cardStyles={{
                    front: {
                      alignItems: "center",
                      display: "flex",
                    },
                    back: {
                      alignItems: "center",
                      display: "flex",
                      textAlign: "center",
                    },
                  }}
                >
                  <div className="flex mx-auto flex-col">
                    <img
                      className="h-20 object-cover p-4 pt-0 mx-auto"
                      src={item.iconPath}
                      alt={`Icon ${index + 1}`}
                    />
                    <h2 className="font-bold text-center mx-8">{item.title}</h2>
                  </div>
                  <div className="flex items-center flex-col">
                    <h2 className="text-center mx-8 leading-7">{item.text}</h2>
                  </div>
                </ReactCardFlip>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile Ansicht */}
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
