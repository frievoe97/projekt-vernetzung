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
              <div style={{ height: "300px" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                  style={{ Height: "100%" }}
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end text-black p-4">
                <h2 className="text-2xl font-semibold bg-white p-2 rounded w-fit">
                  {item.name}
                </h2>
                <p className="mt-2 bg-white p-2 rounded w-fit text-left">
                  {item.text}
                </p>
                <button className="bg-white text-black font-semibold px-4 py-2 rounded mt-2 w-fit">
                  Mehr Informationen
                </button>
                {/* <AnimatedButton /> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
