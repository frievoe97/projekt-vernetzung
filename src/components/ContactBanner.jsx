import React from "react";
import { Link } from "react-router-dom"; // Verwende react-router, um zur Kontaktseite zu navigieren
import ButtonBigRounded from "./elements/ButtonBigRounded";

const ContactBanner = ({ data }) => {
  return (
    <div className="bg-gradient-to-r from-color_contact_banner_background_1  to-color_contact_banner_background_2 text-color_font p-8 flex flex-col items-center justify-center h-fit shadow-[inset_0px_0px_30px_2px_rgba(0,0,0,0.3)]">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-lg text-center mb-4">{data.subtitle}</p>

      <ButtonBigRounded buttonText={data.buttonText} link={data.buttonLink} />
    </div>
  );
};

export default ContactBanner;
