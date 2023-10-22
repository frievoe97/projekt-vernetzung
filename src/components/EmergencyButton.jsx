import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";

const EmergencyButton = () => {
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false);

  const openEmergencyDialog = () => {
    setShowEmergencyDialog(true);
  };

  const closeEmergencyDialog = () => {
    setShowEmergencyDialog(false);
  };

  // Definiere eine Liste von Notrufnummern und deren Beschreibungen
  const emergencyNumbers = [
    {
      title: "Polizei",
      number: "110",
      description: "Bei kriminellen Vorfällen und Sicherheitsbedenken.",
    },
    {
      title: "Feuerwehr",
      number: "112",
      description: "Bei Feuer- und Brandsituationen sowie anderen Notfällen.",
    },
    {
      title: "Ärztlicher Notdienst",
      number: "116 117",
      description:
        "Bei gesundheitlichen Notfällen außerhalb der regulären Praxiszeiten.",
    },
  ];

  return (
    <div className="fixed right-0 bottom-24 p-4 pr-0">
      <button
        className="bg-gray-100 text-black p-4 text-lg shadow-md rounded-none rounded-l-lg"
        onClick={openEmergencyDialog}
      >
        <FontAwesomeIcon icon={faPhone} />
      </button>

      {showEmergencyDialog && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 px-4">
          <div className="bg-white rounded-lg p-8 max-w-screen-md shadow-md">
            <div className="flex flex-row items-center mb-4">
              <button
                className="bg-color_4 text-gray-600 mr-4"
                onClick={closeEmergencyDialog}
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
              <h2 className="text-3xl font-semibold md:text-center text-gray-800 text-left">
                Sofortige Hilfe benötigt?
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              In dringenden Notfällen stehen Ihnen die folgenden Notrufnummern
              zur Verfügung:
            </p>
            <ul className="space-y-4 text-lg">
              {emergencyNumbers.map((emergency, index) => (
                <li key={index} className="flex flex-col items-center w-full">
                  <div className="flex flex-row w-full">
                    <span
                      className="text-gray-600 font-semibold"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {emergency.title}:
                    </span>
                    &nbsp;
                    <a href={`tel:${emergency.number + 123}`}>
                      {emergency.number}
                    </a>
                  </div>
                  <span className="text-gray-500 w-full">
                    {emergency.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700">
              Bitte rufen Sie die entsprechende Nummer an, wenn Sie sich in
              einer Notsituation befinden.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyButton;
