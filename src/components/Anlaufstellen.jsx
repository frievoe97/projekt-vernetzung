import React, { useState, useRef, useEffect } from "react";
import { useGlobalState } from "../data/GlobalState";

function Anlaufstellen() {
  const { state } = useGlobalState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTags, setSearchTags] = useState([]);
  const [placeholder, setplaceholder] = useState(
    "Suche Anlaufstelle oder Tag..."
  );

  const filteredAnlaufstellen = state.anlaufstellenData.filter(
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

  const tagsRef = useRef(null);

  useEffect(() => {
    if (tagsRef.current && searchTags.length > 0) {
      const width = window.getComputedStyle(tagsRef.current).width;
      tagsRef.current.style.paddingLeft = `${width + 16}px`; // 16px for some spacing
    } else if (tagsRef.current) {
      tagsRef.current.style.paddingLeft = "16px"; // reset to default padding
    }
  }, [searchTags]);

  return (
    <div className="p-6 text-center z-0 bg-yellow">
      <h1 className="text-4xl font-bold mt-8 mb-6">Anlaufstellen</h1>
      <div className="max-w-2xl mx-auto mb-8 relative">
        <div className="flex items-center border-2 border-black p-4 rounded-md w-full relative">
          <div className="flex items-center space-x-2 ">
            {searchTags.map((tag, index) => (
              <span
                key={index}
                className="pl-2 bg-gray-200 rounded-2xl text-sm text-gray-600 flex items-center"
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
          </div>
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
      <div className="max-w-2xl mx-auto grid gap-8 ">
        {filteredAnlaufstellen.map((anlaufstelle) => (
          <div
            key={anlaufstelle.id}
            className="bg-white rounded-lg shadow-md p-6 "
          >
            <h2 className="text-xl font-medium mb-4 text-center">
              {anlaufstelle.name}
            </h2>
            <div className="flex flex-wrap items-center mb-4">
              <img
                src={anlaufstelle.image}
                alt={anlaufstelle.name}
                className="w-1/3 max-h-72 object-cover mr-4"
              />
              <p className="text-gray-600 flex-grow">
                {anlaufstelle.description}
              </p>
            </div>
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
