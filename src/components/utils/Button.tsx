import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const Button = ({
  text,
  link,
  icon,
}: {
  text: string;
  link: string;
  icon?: IconDefinition;
}) => {
  return (
    <Link to={link} className="inline-block relative overflow-hidden group">
      <button className="px-6 py-3 text-black border-2 border-black rounded-full overflow-hidden transition-border-color hover:border-gray-400 hover:bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 hover:animate-circle bg-transparent">
        {icon && (
          <span className="mr-2">
            <FontAwesomeIcon icon={icon} />
          </span>
        )}
        {text}
      </button>
    </Link>
  );
};

export default Button;
