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

  return (
    <div
      className="py-0 md:py-16 md:px-4"
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
          <h1 className="text-center mx-8 text-2xl font-bold text-fm_blau mb-4 relative bg-fm_weiss p-2 px-4 rounded-lg mt-8 shadow-2xl">
            {title}
          </h1>
          <h2 className="text-lg font-semibold bg-fm_weiss m-4 p-2 rounded-lg mb-16 text-center shadow-2xl">
            {subtitle}
          </h2>
        </div>

        <div className="p-4">
          <h1 className="md:block hidden text-2xl font-bold text-fm_blau mb-4">
            {title}
          </h1>
          <h2 className="md:block hidden text-lg font-semibold">{subtitle}</h2>
          {/* {descriptions.map((description, index) => (
            <p key={index} className="mt-4">
              {description}
            </p>
          ))} */}
          <ul className="list-disc md:w-fit ml-6 mt-4 md:mx-auto">
            {listItems.map((item, index) => (
              // text-left w-fit
              <li key={index} className="text-left md:w-fit">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    // <div
    //   className="py-0 md:py-8 md:px-4"
    //   style={{ backgroundImage: `url(${imageUrl})` }}
    // >
    //   <div className="max-w-screen-xl mx-auto bg-white  text-justify md:text-center rounded">
    //     <div className="block md:hidden">
    //       <img src={imageUrl} alt="" className="h-24 w-full object-cover" />
    //     </div>
    //     <div className="p-4">
    //       <h1 className="text-2xl font-bold text-left md:text-center text-fm_blau mb-4">
    //         {title}
    //       </h1>
    //       <h2 className="text-lg font-semibold">{subtitle}</h2>
    //       <p className="mt-4">{description}</p>
    //       <p className="mt-4">
    //         Indem wir fachübergreifendes Wissen bündeln, möchten wir für
    //         Betroffene, ihr Umfeld sowie die Öffentlichkeit:
    //       </p>
    //       {/* list-disc ml-4 md:ml-6 mt-2 */}
    //       <ul className="list-disc md:w-fit ml-6 mt-4 md:mx-auto">
    //         {listItems.map((item, index) => (
    //           // text-left w-fit
    //           <li key={index} className="text-left md:w-fit">
    //             {item}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PictureHeader_V2;
