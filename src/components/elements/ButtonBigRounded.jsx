import React from "react";
import { Link } from "react-router-dom";

function ButtonBigRounded({ buttonText, link }) {
  return (
    <button className="mt-6 px-6 py-3 text-color_font border-2 border-black rounded-full overflow-hidden bg-transparent transition-all duration-300 hover:shadow-lg hover:border-black hover:text-color_font">
      <Link className="text-color_font hover:text-color_font" to={link}>
        {buttonText}
      </Link>
    </button>
  );
}

export default ButtonBigRounded;
