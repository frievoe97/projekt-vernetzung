import React from "react";

const PictureHeader_V2 = () => {
  const imageUrl =
    "https://github.com/frievoe97/projekt-vernetzung/blob/main/src/assets/iamges/Image-1.jpeg?raw=true"; // Hier die URL zum Hintergrundbild eintragen

  return (
    <div
      className="py-0 md:py-8 md:px-4"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="max-w-screen-xl mx-auto bg-white p-4 text-justify md:text-center rounded">
        <h1 className="text-2xl font-bold text-left md:text-center text-fm_blau mb-4">
          Machtmissbrauch passiert überall.
        </h1>
        <h2 className="text-lg font-semibold">
          Um dem zu begegnen, ist Prävention eines der wirksamsten Mittel.
        </h2>
        <p className="mt-4">
          Als Beitrag zu mehr Prävention möchten wir hier die vielen
          verschiedenen Facetten von Machtmissbrauch und dessen systemische und
          gesellschaftliche Voraussetzungen abbilden.
        </p>
        <p className="mt-4">
          Indem wir fachübergreifendes Wissen bündeln, möchten wir für
          Betroffene, ihr Umfeld sowie die Öffentlichkeit:
        </p>
        <ul className="list-disc ml-4 md:ml-6 mt-2">
          <li className="text-left w-fit mx-auto">
            das Problem in seiner Drastik in allen Lebensbereichen und Branchen
            unserer Gesellschaft darstellen,
          </li>
          <li className="text-left w-fit mx-auto">
            möglichst präventiv und umfassend informieren, sensibilisieren und
            Handlungsoptionen aufzeigen,
          </li>
          <li className="text-left w-fit mx-auto">
            gemeinsam mit Dritten erörtern, was sich ändern muss und was Jede:r
            einzelne beitragen kann.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PictureHeader_V2;
