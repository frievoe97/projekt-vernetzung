import React, { useState } from "react";

// Annahme: Du hast bereits ein Array mit Anlaufstellen-Daten
const anlaufstellenData = [
  {
    id: 1,
    name: "WEISSER RING",
    description: "Eine kurze Beschreibung der Anlaufstelle 1.",
    link: "https://example.com/anlaufstelle1",
  },
  {
    id: 2,
    name: "Notfall Telefon",
    description: "Eine kurze Beschreibung der Anlaufstelle 2.",
    link: "https://example.com/anlaufstelle2",
  },
  {
    id: 3,
    name: "Verein gegen sexuelle Übergriffe",
    description: "Eine kurze Beschreibung der Anlaufstelle 3.",
    link: "https://example.com/anlaufstelle3",
  },
  // Weitere Anlaufstellen hier
];

function Anlaufstellen() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAnlaufstellen = anlaufstellenData.filter((anlaufstelle) =>
    anlaufstelle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-semibold mb-4 text-center">Anlaufstellen</h1>
      <div className="max-w-2xl mx-auto mb-4">
        <input
          type="text"
          placeholder="Suche Anlaufstelle..."
          className="w-full border border-gray-300 p-2 rounded-md"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="max-w-2xl mx-auto grid gap-4">
        {filteredAnlaufstellen.map((anlaufstelle) => (
          <div
            key={anlaufstelle.id}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <h2 className="text-xl font-medium mb-2 text-center">
              {anlaufstelle.name}
            </h2>
            <p className="text-gray-600 text-center">
              {anlaufstelle.description}
            </p>
            <a
              href={anlaufstelle.link}
              className="text-blue-500 hover:underline text-center mt-2"
            >
              Weitere Informationen
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anlaufstellen;
