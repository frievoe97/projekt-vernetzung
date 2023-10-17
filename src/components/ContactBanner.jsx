import React from "react";
import { Link } from "react-router-dom"; // Verwende react-router, um zur Kontaktseite zu navigieren
import Button from "./utils/Button";

const ContactBanner = () => {
  return (
    <div className="bg-lavendar text-black p-8 flex flex-col items-center justify-center h-fit">
      <h1 className="text-3xl font-bold mb-2">Du hast Fragen?</h1>
      <p className="text-lg text-center mb-4">
        Wir sind hier, um Ihnen zu helfen. Kontaktieren Sie uns gerne.
      </p>
      {/* <Link
        to="/contact"
        className="bg-white text-black px-6 py-3 rounded-md hover:bg-blue-100 text-lg"
      >
        Kontaktieren Sie uns
      </Link> */}
      <Button text="Kontaktieren Sie uns" link="/contact" />
    </div>
  );
};

export default ContactBanner;
