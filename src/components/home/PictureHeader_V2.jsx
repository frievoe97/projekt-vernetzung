import React from "react";

/**
 * Diese Komponente rendert einen Bildkopf (Header) mit dynamischen Daten.
 * @param {Object} data - Die Daten für den Bildkopf, einschließlich Titel, Untertitel, Beschreibung und Liste von Elementen.
 * @param {string} data.imageUrl - Die URL für das Hintergrundbild.
 * @param {string} data.text.title - Der Titel des Bildkopfs.
 * @param {string} data.text.subtitle - Der Untertitel des Bildkopfs.
 * @param {string} data.text.description - Die Beschreibung des Bildkopfs.
 * @param {string[]} data.text.listItems - Eine Liste von Elementen für den Bildkopf.
 * @returns {JSX.Element|null} - Die gerenderte Bildkopf-Komponente oder null, wenn keine Daten vorhanden sind.
 */
function PictureHeader_V2({ data }) {
  // Überprüfe, ob die Daten vorhanden sind
  if (!data) {
    return null; // Wenn keine Daten vorhanden sind, nichts anzeigen
  }

  const { title, subtitle, description, listItems } = data.text;
  const imageUrl = data.imageUrl;
  // const imageUrl =
  //   "http://localhost:8000/projekt-vernetzen/images/" + data.offlineImageUrl;

  console.log(description);

  return (
    <div
      className="py-0 md:pt-16 md:pb-32 md:px-4"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="max-w-screen-xl mx-auto bg-white text-justify md:text-center rounded shadow-2xl">
        <div
          className="block md:hidden relative flex flex-col justify-center items-center "
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          {/* MOBILE */}
          <h1 className="text-center mx-8 mb-4 relative p-2 px-4 rounded-lg mt-8 shadow-2xl heading bg-fm_weiss">
            {title}
          </h1>

          <div className=" rounded-lg shadow-2xl m-4 p-4 mb-16 bg-fm_weiss">
            <h2 className="text-lg font-semibold  text-center mb-4">
              {subtitle}
            </h2>
            <div>
              {description.map((item, index) => (
                <p key={index} className="text-lg text-center mb-2">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <h1 className="md:block hidden heading mb-4">{title}</h1>
          <h2 className="md:block hidden text-lg font-semibold">{subtitle}</h2>
          {/* <p className="md:block hidden text-lg mt-4">{description}</p> */}
          <div className="md:block hidden text-lg mt-4">
            {description.map((item, index) => (
              <p key={index} className="text-lg text-center mb-2">
                {item}
              </p>
            ))}
          </div>
          {/* <ul className="list-disc md:w-fit ml-6 mt-4 md:mx-auto">
            {listItems.map((item, index) => (
              // text-left w-fit
              <li key={index} className="text-left md:w-fit">
                {item}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default PictureHeader_V2;
