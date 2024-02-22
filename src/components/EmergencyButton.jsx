import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import { EMERGENCY_CONTACTS } from "../utils/constants";

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
              {EMERGENCY_CONTACTS.map((emergency, index) => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyButton;
