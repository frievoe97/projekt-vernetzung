import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Eine Slideshow-Komponente zum Anzeigen von Bildern und deren Beschreibungen.
 *
 * @param {Array} data - Eine Array von Objekten, die die Slideshow-Daten enthalten.
 * @returns {JSX.Element|null} - Die Slideshow-Komponente oder null, wenn keine Daten vorhanden sind.
 */
const Slideshow = ({ data }) => {
  // Wenn keine Daten vorhanden sind oder das Datenarray leer ist, gibt die Komponente null zurück.
  if (!data || data.length === 0) {
    return null;
  }

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

  return (
    <div className="max-w-full w-full -mb-2">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="relative max-w-full overflow-hidden">
            <div className="relative">
              {/* Bild */}
              <div style={{ height: "300px" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center contrast-50"
                  style={{ height: "100%" }}
                />
              </div>

              {/* Overlay mit Name, Beschreibung und Button */}
              <div className="absolute inset-0 flex flex-col justify-end text-color_font p-4">
                <h2 className="text-2xl font-semibold bg-white p-2 rounded w-fit">
                  {item.name}
                </h2>
                <p className="mt-2 bg-white p-2 rounded w-fit text-left">
                  {item.description}
                </p>
                <button className="bg-white text-color_font font-semibold px-4 py-2 rounded mt-2 w-fit">
                  Mehr Informationen
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
