// import React, { useState } from "react";

// const anlaufstellenData = [
//   {
//     id: 1,
//     name: "WEISSER RING",
//     description: "Eine kurze Beschreibung der Anlaufstelle 1.",
//     link: "https://example.com/anlaufstelle1",
//     tags: ["Hilfe", "Opfer", "Beratung"],
//   },
//   {
//     id: 2,
//     name: "Notfall Telefon",
//     description: "Eine kurze Beschreibung der Anlaufstelle 2.",
//     link: "https://example.com/anlaufstelle2",
//     tags: ["Notfall", "Telefon", "Unterstützung"],
//   },
//   {
//     id: 3,
//     name: "Verein gegen sexuelle Übergriffe",
//     description: "Eine kurze Beschreibung der Anlaufstelle 3.",
//     link: "https://example.com/anlaufstelle3",
//     tags: ["Verein", "Schutz", "Übergriffe"],
//   },
//   // Weitere Anlaufstellen hier
// ];

// function Anlaufstellen() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchTags, setSearchTags] = useState([]);

//   const filteredAnlaufstellen = anlaufstellenData.filter((anlaufstelle) =>
//     searchTags.every(
//       (tag) =>
//         anlaufstelle.name.toLowerCase().includes(tag.toLowerCase()) ||
//         anlaufstelle.tags.some((t) =>
//           t.toLowerCase().includes(tag.toLowerCase())
//         )
//     )
//   );

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && searchTerm) {
//       setSearchTags((prev) => [...prev, searchTerm]);
//       setSearchTerm("");
//     }
//   };

//   const removeTag = (index) => {
//     const newTags = [...searchTags];
//     newTags.splice(index, 1);
//     setSearchTags(newTags);
//   };

//   return (
//     <div className="p-6 text-center">
//       <h1 className="text-4xl font-bold mt-8 mb-6">Anlaufstellen</h1>
//       <div className="max-w-2xl mx-auto mb-6 relative">
//         <input
//           type="text"
//           placeholder="Suche Anlaufstelle oder Tag..."
//           className="w-full border border-gray-300 p-3 rounded-md pl-8"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />
//         <div className="absolute top-0 bootm-0 flex">
//           {searchTags.map((tag, index) => (
//             <span
//               key={index}
//               className="bg-black rounded-full text-sm text-gray-600 mr-2 inline-flex items-center"
//             >
//               {tag}
//               <button
//                 onClick={() => removeTag(index)}
//                 className="ml-2 text-gray-400 hover:text-gray-500 focus:outline-none"
//               >
//                 &times;
//               </button>
//             </span>
//           ))}
//         </div>
//       </div>
//       <div className="max-w-2xl mx-auto grid gap-6">
//         {filteredAnlaufstellen.map((anlaufstelle) => (
//           <div
//             key={anlaufstelle.id}
//             className="bg-white rounded-lg shadow-md p-6"
//           >
//             <h2 className="text-xl font-medium mb-4 text-center">
//               {anlaufstelle.name}
//             </h2>
//             <p className="text-gray-600 mb-4 text-center">
//               {anlaufstelle.description}
//             </p>
//             <a
//               href={anlaufstelle.link}
//               className="text-blue-500 hover:underline text-center block mb-4"
//             >
//               Weitere Informationen
//             </a>
//             <div className="flex flex-wrap justify-center space-x-2">
//               {anlaufstelle.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-600"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Anlaufstellen;

import React, { useState } from "react";

const anlaufstellenData = [
  {
    id: 1,
    name: "WEISSER RING",
    description: "Eine kurze Beschreibung der Anlaufstelle 1.",
    link: "https://example.com/anlaufstelle1",
    tags: ["Hilfe", "Opfer", "Beratung"],
  },
  {
    id: 2,
    name: "Notfall Telefon",
    description: "Eine kurze Beschreibung der Anlaufstelle 2.",
    link: "https://example.com/anlaufstelle2",
    tags: ["Notfall", "Telefon", "Unterstützung"],
  },
  {
    id: 3,
    name: "Verein gegen sexuelle Übergriffe",
    description: "Eine kurze Beschreibung der Anlaufstelle 3.",
    link: "https://example.com/anlaufstelle3",
    tags: ["Verein", "Schutz", "Übergriffe"],
  },
  // Weitere Anlaufstellen hier
];

function Anlaufstellen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTags, setSearchTags] = useState([]);
  const [placeholder, setplaceholder] = useState(
    "Suche Anlaufstelle oder Tag..."
  );

  const filteredAnlaufstellen = anlaufstellenData.filter(
    (anlaufstelle) =>
      (searchTerm &&
        (anlaufstelle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          anlaufstelle.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          ))) ||
      searchTags.every(
        (tag) =>
          anlaufstelle.name.toLowerCase().includes(tag.toLowerCase()) ||
          anlaufstelle.tags.some((t) =>
            t.toLowerCase().includes(tag.toLowerCase())
          )
      )
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm) {
      setSearchTags((prev) => [...prev, searchTerm]);
      setSearchTerm("");
      setplaceholder("");
    }
  };

  const removeTag = (index) => {
    const newTags = [...searchTags];
    newTags.splice(index, 1);
    setSearchTags(newTags);

    if (searchTags.length >= 1) {
      setplaceholder("Suche Anlaufstelle oder Tag...");
    } else {
      setplaceholder("");
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mt-8 mb-6">Anlaufstellen</h1>
      <div className="max-w-2xl mx-auto mb-6 relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full border border-gray-300 p-3 rounded-md pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex">
          {searchTags.map((tag, index) => (
            <span
              key={index}
              className="pl-4 rounded-full text-sm text-gray-600 mr-2 inline-flex items-center"
            >
              {tag}
              <button
                onClick={() => removeTag(index)}
                className="py-1 px-2 ml-2 text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-2xl mx-auto grid gap-6">
        {filteredAnlaufstellen.map((anlaufstelle) => (
          <div
            key={anlaufstelle.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-medium mb-4 text-center">
              {anlaufstelle.name}
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              {anlaufstelle.description}
            </p>
            <a
              href={anlaufstelle.link}
              className="text-blue-500 hover:underline text-center block mb-4"
            >
              Weitere Informationen
            </a>
            <div className="flex flex-wrap justify-center space-x-2">
              {anlaufstelle.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anlaufstellen;
