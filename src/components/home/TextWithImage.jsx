import React from "react";
import ButtonBigRounded from "../elements/ButtonBigRounded";

const TextWithImage = () => {
  return (
    <div className="w-full bg-fm_weiss">
      <div className="py-4 max-w-screen-xl mx-auto">
        {/* Erste Zeile mit Überschrift */}
        <div className="p-4">
          <h1 className="text-2xl font-bold text-left">
            Integrativer Ansatz für bessere Prävention{" "}
          </h1>
          {/* Rechte Spalte mit Bild auf Handys */}
          <div className="lg:w-1/3 p-4 lg:pl-8 lg:hidden">
            <img
              src="https://github.com/frievoe97/projekt-vernetzung/blob/main/src/assets/iamges/Image-3.jpeg?raw=true"
              alt="Bild"
              className="w-full h-auto max-w-xs mx-auto"
            />
          </div>
        </div>

        {/* Zweite Zeile mit zwei Spalten */}
        <div className="flex flex-col lg:flex-row-reverse">
          {/* Rechte Spalte mit Bild auf großen Bildschirmen */}
          <div className="lg:w-1/3 p-4 lg:pl-8 hidden lg:block">
            <img
              src="https://github.com/frievoe97/projekt-vernetzung/blob/main/src/assets/iamges/Image-3.jpeg?raw=true"
              alt="Bild"
              className="w-full h-auto"
            />
          </div>

          {/* Linke Spalte mit Text und Button */}
          <div className="lg:w-2/3 p-4">
            <p className="text-justify mb-4">
              {" "}
              Jeder Fall von erlebtem Machtmissbrauch ist eine individuelle
              Geschichte. Dennoch liegen diesen Fällen ähnliche Muster zugrunde.
              Und dies unabhängig von einer Branche oder einem Lebensbereich.
            </p>
            <p className="text-justify mb-4">
              {" "}
              Medial werden diese Muster zuletzt vielfach als “System”
              beschrieben, “das Machtmissbrauch stützt”. Dieses System umfasst
              Täter:innen, die Gewalt oftmals subtil und schleichend einsetzen.
              Es umfasst aber auch deren Umfeld sowie – Stand heute – limiterte
              Handlungsoptionen für Betroffene.
            </p>
            <p className="text-justify mb-4">
              {" "}
              Wir möchten dieses System auf unserer Plattform möglichst
              verständlich aufarbeiten und dabei vor allem zeigen, dass es nicht
              in Silos, sondern gesamtgesellschaftlich betrachtet werden muss.
            </p>
            <ButtonBigRounded buttonText="Mehr Erfahren" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextWithImage;
