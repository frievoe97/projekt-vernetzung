import React from "react";

function Contact() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mt-0 md:mt-8">Werde Partner</h1>
      <p className="text-gray-600 mt-4">
        Wenn du mit uns zusammenarbeiten möchtest, fülle das untenstehende
        Formular aus, und einer unserer Mitarbeiter wird sich mit dir in
        Verbindung setzen. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <form className="mt-8 space-y-4 mx-4 md:mx-16">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block font-semibold">
              Vorname
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-semibold">
              Nachname
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 w-full"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block font-semibold">
            Telefon (erforderlich)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">
            E-Mail (erforderlich)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold">
            Nachricht (erforderlich)
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 w-full"
            required
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
          >
            Absenden
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
