import React, { useState, useRef, useEffect } from "react";

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

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && searchTags.length > 0) {
      const tagsWidth = inputRef.current.getBoundingClientRect().width;
      inputRef.current.style.paddingLeft = `${tagsWidth + 16}px`; // 16px for some spacing
    } else if (inputRef.current) {
      inputRef.current.style.paddingLeft = "16px"; // reset to default padding
    }
  }, [searchTags]);

  return (
    <div className="p-6 text-center z-0">
      <h1 className="text-4xl font-bold mt-8 mb-6">Anlaufstellen</h1>
      <div className="max-w-2xl mx-auto mb-6 relative">
        <div className="flex items-center border border-gray-300 p-3 rounded-md w-full relative">
          {searchTags.map((tag, index) => (
            <span
              key={index}
              className="pl-2 bg-gray-200 rounded-2xl text-sm text-gray-600 mr-2"
            >
              {tag}
              <button
                onClick={() => removeTag(index)}
                className="px-2 py-1 ml-2 rounded-2xl text-gray-400 hover:text-gray-500 focus:outline-none z-0"
              >
                &times;
              </button>
            </span>
          ))}
          <input
            type="text"
            placeholder={
              searchTags.length ? "" : "Suche Anlaufstelle oder Tag..."
            }
            className="grow outline-none z-0 relative bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
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
