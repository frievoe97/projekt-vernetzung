import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = ({ data }) => {
  if (!data || data.length === 0) {
    return null; // Rückgabewert, wenn keine Daten vorhanden sind
  }

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

  return (
    <div className="max-w-full w-full">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="relative max-w-full overflow-hidden">
            <div className="relative">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full"
                style={{ maxHeight: "400px" }}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="mt-2">{item.text}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4">
                  {item.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
