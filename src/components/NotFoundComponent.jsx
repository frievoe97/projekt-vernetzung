import React from "react";
import PropTypes from "prop-types";
import ButtonBigRounded from "./elements/ButtonBigRounded";

function NotFoundComponent({ buttonText, link }) {
  return (
    <div className="flex flex-col items-center justify-center h-fit mt-24">
      <h2 className="text-4xl font-semibold mb-4 text-center p-8">
        Diese Seite ist gerade noch in Arbeit :)
      </h2>
      <div className="mb-8">
        <ButtonBigRounded buttonText={buttonText} link={link} />
      </div>
    </div>
  );
}

NotFoundComponent.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NotFoundComponent;
