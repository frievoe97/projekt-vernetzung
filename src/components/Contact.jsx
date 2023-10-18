import React from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  // Funktion zum Verarbeiten des Formulars
  function sendEmail(e) {
    e.preventDefault();

    // Hier füge deine Template IDs hinzu
    const templateParams = {
      from_name: e.target.firstName.value + " " + e.target.lastName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // Hier füge deine Template ID und deinen Service ID hinzu
    emailjs
      .send(
        "service_w239ezy",
        "template_wjgvztk",
        templateParams,
        "user_QbuqseBrsJXfIF3I62607"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
  }

  return (
    <div className="container bg-color_4 mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl">
      <h1 className="text-4xl font-bold pt-8">Werde Partner*in</h1>
      <p className="text-lg text-gray-600 mt-4">
        Wenn du mit uns zusammenarbeiten möchtest, fülle das untenstehende
        Formular aus, und einer unserer Mitarbeiter wird sich mit dir in
        Verbindung setzen. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <form className="flex flex-col mt-4 space-y-4 ">
        <div className="flex flex-row space-x-4">
          <div className="grow ">
            <label htmlFor="firstName" className="block font-semibold">
              Vorname
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full h-8 border-black rounded border-2 bg-transparent"
              required
            />
          </div>
          <div className="grow">
            <label htmlFor="lastName" className="block font-semibold">
              Nachname
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full h-8 border-black rounded border-2 bg-transparent"
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
            className="w-full h-8 border-black rounded border-2 bg-transparent"
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
            className="w-full h-8 border-black rounded border-2 bg-transparent"
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
            className="w-full h-32 border-black rounded border-2 bg-transparent"
            required
          ></textarea>
        </div>
        <div className="text-center md:text-right">
          <button
            // type="submit"
            className="button border-black rounded border-2 bg-transparent"
          >
            Absenden
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
