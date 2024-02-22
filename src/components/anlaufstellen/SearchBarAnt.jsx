import React from "react";
import "./SearchBarAnt.css";

function SearchBarAnt() {
  return (
    <div className="w-full mb-4 bg-fm_weiss">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="heading-koulen pt-12 mb-6">Anlaufstellen</h2>
        <p className="font-bold text-lg mb-4 px-6">
          Potenziell relevante Anlaufstellen im Kontext von Machtmissbrauch{" "}
        </p>
        <p className="max-w-screen-lg mx-auto pb-10 text-base px-6">
          <b>Disclaimer:</b> Projekt Vernetzung erhebt keinen Anspruch auf
          Vollständigkeit und stellt die eigene Auswahl an Anlaufstellen
          fortlaufend auf den Prüfstand. Falls wir aus deiner Sicht etwas
          vergessen haben, sind wir für konstruktive Anregungen und Ideen
          jederzeit dankbar.
        </p>
      </div>
    </div>
  );
}

export default SearchBarAnt;
