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
        className="bg-red-500 text-black p-4 text-lg shadow-md hover:bg-red-600 rounded-none rounded-l-lg"
        onClick={openEmergencyDialog}
      >
        <FontAwesomeIcon icon={faPhone} />
      </button>

      {showEmergencyDialog && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-screen-md">
            <button
              className="text-gray-600 hover:text-red-500"
              onClick={closeEmergencyDialog}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Notrufnummern</h2>
            <ul className="space-y-2">
              <li>
                <strong>Polizei:</strong> 110
              </li>
              <li>
                <strong>Feuerwehr:</strong> 112
              </li>
              <li>
                <strong>Ärztlicher Notdienst:</strong> 116 117
              </li>
              {/* Füge weitere Notrufnummern hinzu */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyButton;
