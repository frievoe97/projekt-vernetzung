import React from "react";
import { useGlobalState } from "../data/GlobalState";

function Glossary() {
  const { state } = useGlobalState();
  return (
    <div className="p-6 text-center z-0 bg-yellow">
      <h1 className="text-4xl font-bold mt-8 mb-6">Glossar</h1>
      <div className="grid text-left gap-6 mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl my-16">
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
