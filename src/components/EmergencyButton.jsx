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

  return (
    <div className="fixed right-0 bottom-24 p-4 pr-0">
      <button
        className="bg-gray-100 text-black p-4 text-lg shadow-md hover:bg-red-600 rounded-none rounded-l-lg"
        onClick={openEmergencyDialog}
      >
        <FontAwesomeIcon icon={faPhone} />
      </button>

      {showEmergencyDialog && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-screen-md shadow-md">
            <div className="flex flex-row">
              <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
                Notrufnummern
              </h2>
              <button
                className="text-gray-600 hover:text-red-500"
                onClick={closeEmergencyDialog}
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <span className="w-fit text-gray-600 font-semibold">
                  Polizei:
                </span>
                &nbsp; 110
              </li>
              <li className="flex items-center">
                <span className="w-fit text-gray-600 font-semibold">
                  Feuerwehr:
                </span>
                &nbsp; 112
              </li>
              <li className="flex items-center">
                <span className="w-fit text-gray-600 font-semibold">
                  Ärztlicher Notdienst:
                </span>
                &nbsp; 116 117
              </li>
              {/* Fügen Sie weitere Notrufnummern hinzu */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyButton;
