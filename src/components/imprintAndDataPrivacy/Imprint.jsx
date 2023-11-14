// Imprint.jsx

import React from "react";

const Imprint = () => {
  return (
    <div className="pt-16">
      <div className="p-0 md:p-6 text-center z-0 text-color_font">
        <div className="grid text-center gap-0 mx-auto px-0 md:px-6 lg:px-8 max-w-screen-xl my-0">
          <h1 className="text-2xl font-bold text-fm_blau mb-4">Impressum</h1>
          <div className="text-left w-fit mx-auto">
            <h2 className="text-xl font-bold mt-4 w-fit">
              Verantwortlich für den Inhalt dieser Website:
            </h2>
            <p className="mt-2 w-fit">Projekt Vernetzung e.V.</p>
            <p className="w-fit">Berlin, Deutschland</p>

            <h2 className="text-xl font-bold mt-4 w-fit">Kontakt:</h2>
            {/* <p className="mt-2 w-fit">E-Mail: info@projekt-vernetzung.org</p> */}

            <a
              href="mailto:projekt-vernetzung@email.com"
              className="mt-2 w-fit text-black"
            >
              E-Mail: info@projekt-vernetzung.org
            </a>

            <h2 className="text-xl font-bold mt-4 w-fit">Haftungshinweis:</h2>
            <p className="mt-2 w-fit">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links.
            </p>

            <p className="mt-8 w-fit">© 2023 Projekt Vernetzung e.V.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
