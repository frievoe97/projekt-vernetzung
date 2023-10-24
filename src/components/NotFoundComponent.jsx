import React from "react";
import { Link } from "react-router-dom";
import ButtonBigRounded from "./elements/ButtonBigRounded";

function NotFoundComponent({ text, buttonText, link }) {
  return (
    <div className="flex flex-col items-center justify-center h-fit mt-16">
      <h2 className="text-4xl font-semibold mb-4">
        404 - Seite nicht gefunden
      </h2>
      <p className="text-lg mb-8">{text}</p>

      <ButtonBigRounded buttonText={buttonText} link={link} />
    </div>
  );
}

export default NotFoundComponent;
