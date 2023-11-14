// DataPrivacy.jsx

import React from "react";

const DataPrivacy = () => {
  return (
    <div className="pt-16">
      <div className="p-0 md:p-6 text-center z-0 text-color_font">
        <div className="grid text-center gap-0 mx-auto px-0 md:px-6 lg:px-8 max-w-screen-xl my-0">
          <h1 className="text-2xl font-bold text-fm_blau mb-4">
            Datenschutzerklärung
          </h1>
          <div className="text-left w-fit mx-auto">
            <h2 className="text-xl font-bold mt-4 w-fit">
              1. Keine Speicherung personenbezogener Daten
            </h2>
            <p className="mt-2 w-fit">
              Wir speichern oder verarbeiten keine personenbezogenen Daten auf
              dieser Website.
            </p>

            <h2 className="text-xl font-bold mt-4 w-fit">2. Cookies</h2>
            <p className="mt-2 w-fit">Diese Website verwendet keine Cookies.</p>

            <h2 className="text-xl font-bold mt-4 w-fit">
              3. Verwendung von Analysediensten
            </h2>
            <p className="mt-2 w-fit">
              Wir setzen keine Analysedienste oder Tracking-Tools ein.
            </p>

            <p className="mt-8 w-fit">
              Bei weiteren Fragen oder Anliegen zum Datenschutz stehen wir Ihnen
              gerne zur Verfügung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPrivacy;
