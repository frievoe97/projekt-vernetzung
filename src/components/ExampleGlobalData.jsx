// Beispielkomponente, um auf zusätzliche globale Daten zuzugreifen und sie zu ändern
import React, { useState } from "react";
import { useGlobalState } from "../data/GlobalState";

function ExampleGlobalData() {
  const { state, dispatch } = useGlobalState();
  const [neueDaten, setNeueDaten] = useState("");

  const handleDatenÄndern = () => {
    // Hier setzen Sie die zusätzlichen globalen Daten mithilfe der Aktion SET_ZUSATZDATEN
    dispatch({ type: "SET_ZUSATZDATEN", payload: neueDaten });
    // setNeueDaten(""); // Zurücksetzen des Eingabefelds
  };

  return (
    <div className="text-center">
      <h2>Zusätzliche Globale Daten</h2>
      <p>Aktuelle zusätzliche Daten: {state.zusatzDaten}</p>
      <input
        type="text"
        value={neueDaten}
        onChange={(e) => setNeueDaten(e.target.value)}
        placeholder="Neue Daten eingeben"
      />
      <button onClick={handleDatenÄndern}>Daten ändern</button>
    </div>
  );
}

export default ExampleGlobalData;
