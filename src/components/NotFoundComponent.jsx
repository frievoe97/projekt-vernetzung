import React from "react";
import PropTypes from "prop-types"; // Importiere PropTypes für die Typüberprüfung der Props
import ButtonBigRounded from "./elements/ButtonBigRounded";

/**
 * NotFoundComponent ist eine React-Komponente, die eine 404-Fehlerseite darstellt.
 * Sie zeigt eine Fehlermeldung an und bietet die Möglichkeit, zu einer anderen Seite zu navigieren.
 *
 * @param {Object} props - Die Props für die Komponente.
 * @param {string} props.text - Der Text, der die Fehlermeldung beschreibt.
 * @param {string} props.buttonText - Der Text auf dem Navigationsbutton.
 * @param {string} props.link - Der Link, zu dem der Navigationsbutton führt.
 * @returns {JSX.Element} - Die gerenderte Komponente.
 */
function NotFoundComponent({ text, buttonText, link }) {
  return (
    <div className="flex flex-col items-center justify-center h-fit mt-24">
      {/* Überschrift für die 404-Fehlerseite */}
      <h2 className="text-4xl font-semibold mb-4 text-center">
        404 - Seite nicht gefunden
      </h2>

      {/* Fehlermeldungstext */}
      <p className="text-lg mb-8">{text}</p>

      {/* Navigationsbutton, um zur Startseite zu gelangen */}
      <ButtonBigRounded buttonText={buttonText} link={link} />
    </div>
  );
}

// PropTypes für Typüberprüfung der Props hinzufügen
NotFoundComponent.propTypes = {
  text: PropTypes.string.isRequired, // Der Text muss eine Zeichenkette sein und ist erforderlich.
  buttonText: PropTypes.string.isRequired, // Der buttonText muss eine Zeichenkette sein und ist erforderlich.
  link: PropTypes.string.isRequired, // Der Link muss eine Zeichenkette sein und ist erforderlich.
};

export default NotFoundComponent;
