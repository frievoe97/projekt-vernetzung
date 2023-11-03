import React from "react";
import { MdClose } from "react-icons/md"; // Importiere das Schließensymbol

function Tags({ tag, onRemoveTag, removable = false }) {
  const handleRemoveTag = (tag) => {
    onRemoveTag(tag);
  };

  return (
    <div className="tags-container">
      <div className="flex flex-wrap">
        <div
          className={`bg-fm_grau text-fm_weiss px-2 py-1 rounded-full mr-2 mb-2 text-sm font-bold relative ${
            removable ? "pr-10" : "pr-2"
          }`}
        >
          {tag}
          {removable && (
            <button
              className="text-red-500 absolute right-0 top-0 h-full px-auto px-2 py-0 rounded-full border-0 border-black"
              onClick={() => handleRemoveTag(tag)}
            >
              <MdClose />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tags;
