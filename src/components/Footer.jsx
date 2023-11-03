import React from "react";

const Footer = () => {
  return (
    <div className="bg-fm_blau text-fm_weiss p-8  py-4 md:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h4 className="text-xl font-bold">Kontakt</h4>
            <p className="mt-2">projekt-vernetzung@email.com</p>
            <p>Berlin, Deutschland</p>
            <p className="mt-6">© 2023 Projekt Vernetzung</p>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h4 className="text-xl font-bold">Newsletter</h4>
            <p className="my-2">
              Registriere dich hier für unseren Newsletter!
            </p>
            <button className="my-2 bg-red-500 hover:bg-red-600 text-fm_weiss px-4 py-2 rounded">
              Jetzt registrieren!
            </button>
            <div className="w-full md:w-auto flex flex-wrap">
              <a
                href="#"
                className="text-fm_weiss hover:text-fm_weiss px-4 pr-4 pl-0"
              >
                Impressum
              </a>
              <a
                href="#"
                className="text-fm_weiss hover:text-fm_weiss px-4 pr-4 pl-0"
              >
                Datenschutz
              </a>
              <a
                href="#"
                className="text-fm_weiss hover:text-fm_weiss px-4 pr-4 pl-0"
              >
                Nutzungsbedingungen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
