import React from "react";

function ModernCard({ imgSrc, title, text }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4">
      <img className="w-full h-auto" src={imgSrc} alt="Card Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  );
}

export default ModernCard;
