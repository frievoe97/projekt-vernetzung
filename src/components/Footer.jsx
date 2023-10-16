import React from "react";

function Footer() {
  return (
    <footer className="bg-blue_dark text-white py-6">
      <div className="container sm:w-full flex flex-col md:flex-row justify-between items-start max-w-full md:px-16 md:pb-6">
        <div className="w-full px-4 md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">Projekt Vernetzung</h3>
          <p className="mt-[2rem]">Wir sind eine private Initiative.</p>
          <p className="text-sm">&copy; Projekt Vernetzung 2023</p>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <h3 className="text-2xl font-bold">Kontakt</h3>
          <p className="mt-[2rem]">
            Wir freuen uns, wenn du Kontakt zu uns aufnehmen, deine Geschichte
            oder dein Wissen teilen möchtest. Wende dich jederzeit an{" "}
            <a
              href="mailto:projektvernetzung@gmail.com"
              className="text-white hover:underline"
            >
              projektvernetzung@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
