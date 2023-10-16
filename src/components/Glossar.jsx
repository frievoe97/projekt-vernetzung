import React from "react";
import { useGlobalState } from "../data/GlobalState";

function Glossary() {
  const { state } = useGlobalState();
  return (
    <div className="p-6 bg-yellow">
      <h1 className="text-4xl font-bold mt-8 mb-6 text-center">Glossar</h1>
      <div className="grid gap-6">
        {state.glossaryData.map((item, index) => (
          <div key={index} className="p-6 border-b-2 border-black">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              {item.term}
            </h2>
            <p className="text-gray-600">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Glossary;
