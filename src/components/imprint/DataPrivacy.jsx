import React from "react";

const DataPrivacy = () => {
  return (
    <div className="pt-16">
      <div className="p-0 md:p-6 text-center z-0 text-color_font">
        <div className="grid text-center gap-0 mx-auto px-0 md:px-6 lg:px-8 max-w-screen-xl my-0">
          <div className="md:bg-fm_weiss p-4 rounded-xl mt-16 w-fit mx-auto p-8 md:shadow-2xl">
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
              <p className="mt-2 w-fit">
                Diese Website verwendet keine Cookies.
              </p>

              <h2 className="text-xl font-bold mt-4 w-fit">
                3. Verwendung von Analysediensten
              </h2>
              <p className="mt-2 w-fit">
                Unsere Webhosting-Infrastruktur erfasst bestimmte Daten in
                Logfiles und nutzt die Statistikprogramme AWStats und Report
                Magic. In den Logfiles werden anonymisierte IP-Adressen, den
                verwendeten Browser, das Betriebssystem, Datum und Uhrzeit der
                Serveranfrage sowie die Herkunftswebsite (sofern vom Benutzer
                übermittelt) gespeichert. Die IP-Adressen werden anonymisiert,
                indem die tatsächliche IP-Adresse des Besuchers durch eine
                zufällige IP-Adresse ersetzt wird, wobei XXX ein Wert zwischen 1
                und 254 ist, sodass keine Herstellung eines Personenbezugs mehr
                möglich ist.
              </p>

              <p className="mt-8 w-fit">
                Bei weiteren Fragen oder Anliegen zum Datenschutz stehen wir
                Ihnen gerne zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPrivacy;
