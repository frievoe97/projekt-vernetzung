import React from "react";
import ButtonBigRounded from "../elements/ButtonBigRounded"; // Stelle sicher, dass du den Button-Import entsprechend deinem Projekt anpasst

const MotivationAusEigenerErfahrung = () => {
  return (
    <div className="w-full bg-fm_weiss">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="p-4">
          <img
            src="https://github.com/frievoe97/projekt-vernetzung/blob/main/src/assets/iamges/Image-4.jpeg?raw=true"
            alt="Bild"
            className="w-full h-auto max-w-lgg mx-auto"
          />
        </div>
        <h1 className="text-2xl font-bold mb-4">
          Motivation aus eigener Betroffenenerfahrung
        </h1>
        <p className="mb-4">
          Bei Projekt Vernetzung handelt es sich um eine private
          Content-Initiative. Die Initiatorinnen haben im privaten wie auch
          beruflichen Lebensbereich in Deutschland Erfahrungen mit
          Machtmissbrauch gemacht.
        </p>
        <p className="mb-4">
          Bei deren Aufarbeitung fielen uns einige gesellschaftliche Missstände
          auf, die wir als Privatpersonen angehen und zum Besseren verändern
          können. Wesentliche Mängel sind mangelnde Aufklärung und
          Sensibilisierung. Aus diesem persönlichen Beweggrund haben wir uns
          genau das zum Ziel gesetzt.
        </p>
        <div className="mb-8">
          <ButtonBigRounded buttonText="Weitere Informationen" link="/" />
        </div>
      </div>
    </div>
  );
};

export default MotivationAusEigenerErfahrung;
