import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">Projekt Vernetzung</h3>
          <p className="mt-2">Wir sind eine private Initiative.</p>
          <p className="text-sm">&copy; Projekt Vernetzung 2023</p>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold">Kontakt</h3>
          <p className="mt-2">
            Wir freuen uns, wenn du Kontakt zu uns aufnehmen, deine Geschichte
            oder dein Wissen teilen möchtest. Wende dich jederzeit an{" "}
            <a
              href="mailto:projektvernetzung@gmail.com"
              className="text-blue-200 hover:underline"
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
