import React from "react";

function PictureHeader() {
  return (
    <div
      className="bg-cover bg-center flex items-center justify-center saturate-100"
      style={{
        backgroundImage:
          "url('https://github.com/frievoe97/projekt-vernetzung/blob/main/src/assets/iamges/Image-1.jpeg?raw=true')",
        backgroundPosition: "center bottom", // Hier die Änderung
      }}
    >
      <div className="md:rounded-lg md:m-8 mb-16 bg-fm_weiss shadow-2xl text-center p-8 max-w-screen-xl">
        <h1 className="text-2xl font-bold text-fm_blau mb-4">
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
        <ul className="list-disc ml-6 mt-2">
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
}

export default PictureHeader;
