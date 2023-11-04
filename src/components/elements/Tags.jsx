import React from "react";
import { MdClose } from "react-icons/md"; // Importiere das Schließensymbol

function Tags({ tag, onRemoveTag, onClickTag, removable = false }) {
  const handleRemoveTag = () => {
    onRemoveTag(tag);
  };

  const handleClickTag = () => {
    if (onClickTag == undefined) return;
    onClickTag(tag);
  };

  return (
    <div className="tag-container w-fit">
      <div
        className="flex flex-row flex-nowrap items-center rounded-full m-1 ml-0 md:m-2 bg-fm_helles_beige"
        onClick={handleClickTag}
      >
        <p className={removable ? "ml-2" : "mx-2"}>{tag}</p>
        {removable && (
          <button
            className="p-0 rounded-full mx-1 bg-fm_grau border-none hover:border-none"
            onClick={handleRemoveTag}
          >
            <MdClose />
          </button>
        )}
      </div>
    </div>
  );
}

export default Tags;
