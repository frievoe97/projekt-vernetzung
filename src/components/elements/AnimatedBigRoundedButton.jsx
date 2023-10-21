import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importieren Sie die Framer Motion-Bibliothek

function YourComponent({ item, isVisible }) {
  return (
    <motion.button
      className="mt-6 px-6 py-3 text-black border-2 border-black rounded-full overflow-hidden bg-transparent transition-all duration-300 hover:shadow-lg hover:border-black hover:text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link className="text-black hover:text-black" to="/interview">
        {item.buttonText}
      </Link>
      <div className="border-2 border-black rounded-full opacity-0 group-hover:opacity-100 absolute inset-0"></div>
    </motion.button>
  );
}

export default YourComponent;
