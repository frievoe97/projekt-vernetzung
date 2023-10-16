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
    <div className="max-w-full w-full -mb-1.5">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="relative max-w-full overflow-hidden">
            <div className="relative">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-auto max-h-400px object-cover"
                style={{ maxHeight: "400px" }}
              />

              <div className="absolute inset-0 flex flex-col justify-end text-black p-4">
                <h2 className="text-2xl font-semibold bg-white p-2 rounded w-fit">
                  {item.title}
                </h2>
                <p className="mt-2 bg-white p-2 rounded w-fit">{item.text}</p>
                <button className="bg-white text-black font-semibold px-4 py-2 rounded mt-2 w-fit">
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
