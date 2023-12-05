import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";

const EmergencyButton = () => {
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false);

  const openEmergencyDialog = () => {
    setShowEmergencyDialog(true);
    toggleScroll(false); // Deaktiviert das Scrollen
  };

  const closeEmergencyDialog = () => {
    setShowEmergencyDialog(false);
    toggleScroll(true); // Aktiviert das Scrollen
  };

  // Definiere eine Liste von Notrufnummern und deren Beschreibungen
  const emergencyNumbers = [
    {
      title: "Weisser Ring",
      number: "116 006",
      description:
        "Für in Not geratene Betroffene von Gewalt und Kriminalität.",
    },
    {
      title: "Hilfetelefon Gewalt gegen Frauen",
      number: "116 016",
      description:
        "Für alle Frauen, die von Gewalt betroffenen oder bedroht sind – ganz gleich, ob die Gewalterfahrung in der Vergangenheit oder Gegenwart liegt. Darüber hinaus können sich auch Menschen aus dem sozialen Umfeld der Betroffenen jederzeit an das Hilfetelefon wenden.",
    },
    {
      title: "Patient:innenservice und Ärzt:innen",
      number: "116 117",
      description:
        "Medizinische Hilfe von Ärztinnen und Ärzte sowie Psychotherapeutinnen und Psychotherapeuten.",
    },
  ];

  const toggleScroll = (enableScroll) => {
    if (enableScroll) {
      // Aktiviert das Scrollen
      document.body.style.overflow = "auto";
    } else {
      // Deaktiviert das Scrollen
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="fixed right-0 bottom-16 md:bottom-96 p-4 pr-0 hover:border-none">
      <button
        className="bg-gray-100 text-fm_rosa p-4 text-lg shadow-md rounded-none rounded-l-lg hover:border-none"
        onClick={openEmergencyDialog}
      >
        <FontAwesomeIcon icon={faPhone} />
      </button>

      {showEmergencyDialog && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 px-4 text-color_font">
          <div className="bg-white rounded-lg p-4 md:p-8 max-w-screen-md shadow-md">
            <div className="flex flex-row items-center mb-4">
              <button
                className="bg-color_background_2  mr-4 hover:border-none border-none"
                onClick={closeEmergencyDialog}
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
              <h2 className="text-lg md:text-xl font-semibold md:text-center  text-left">
                Sofortige Hilfe benötigt?
              </h2>
            </div>
            <p className="text-sm md:text-lg mb-4">
              In dringenden Notfällen stehen Ihnen die folgenden Notrufnummern
              zur Verfügung:
            </p>
            <ul className="space-y-4 text-sm md:text-lg">
              {emergencyNumbers.map((emergency, index) => (
                <li key={index} className="flex flex-col items-center w-full">
                  <div className="flex flex-row w-full">
                    <span
                      className=" font-semibold"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {emergency.title}:
                    </span>
                    &nbsp;
                    <a
                      className="text-color_font"
                      href={`tel:${emergency.number}`}
                    >
                      {emergency.number}
                    </a>
                  </div>
                  <span className=" w-full">{emergency.description}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm md:text-lg">
              Du hast Feedback oder willst Kontakt zu uns aufnehmen? Dann melde
              dich gerne bei uns:
            </p>
            <a
              href="mailto:projekt-vernetzung@email.com"
              className="mt-4 w-fit text-black hover:text-black text-sm md:text-lg"
            >
              info@projekt-vernetzung.org
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyButton;
