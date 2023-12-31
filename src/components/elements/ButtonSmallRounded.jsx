import React from "react";
import { Link } from "react-router-dom";

function ButtonBigRounded({ buttonText, link }) {
  return (
    <button className="mt-6 px-2 py-1 text-color_font rounded-full overflow-hidden bg-fm_rosa transition-all duration-300 hover:shadow-lg border-none hover:border-none hover:text-color_font">
      <Link className="text-color_font hover:text-color_font text-sm" to={link}>
        {buttonText}
      </Link>
    </button>
  );
}

export default ButtonBigRounded;
