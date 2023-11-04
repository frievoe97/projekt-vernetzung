import React from "react";

function PictureHeaderGlossary() {
  return (
    <div
      className="bg-cover bg-center flex items-center justify-center saturate-100"
      style={{
        backgroundImage:
          "url('https://github.com/frievoe97/projekt-vernetzung/blob/main/src/assets/iamges/Image-2.jpeg?raw=true')",
        backgroundPosition: "center bottom", // Hier die Änderung
      }}
    >
      <div className="p-4 md:rounded-lg md:m-8 mb-16 bg-fm_weiss shadow-2xl text-justify md:text-center p-8">
        <h1 className="text-2xl font-bold text-fm_blau mb-4">Glossar</h1>
        <h2 className="text-lg font-semibold">
          Hier möchten wir dir die wichtigsten Begriffe im Kontext von
          Machtmissbrauch erläutern
        </h2>
        <p className="mt-4">
          Betroffene sollen auf dieser Seite schneller und einfacher
          Informationen finden, die auf ihre persönliche Situation zutreffen
          könnten. Davon ausgehend, können sie sich weiter informieren und
          insbesondere das in Worte fassen, was oftmals schwer in Worte zu
          fassen ist.
        </p>
        <p className="mt-4">
          Wir erheben keinen Anspruch auf Vollständigkeit. Unsere Auswahl an
          Begrifflichkeiten wird kontinuierlich auf den Prüfstand gestellt. Für
          konstruktive Anregungen und Ideen sind wir jederzeit dankbar.
        </p>
        {/* <ul className="list-disc ml-6 mt-2">
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
        </ul> */}
      </div>
    </div>
  );
}

export default PictureHeaderGlossary;
