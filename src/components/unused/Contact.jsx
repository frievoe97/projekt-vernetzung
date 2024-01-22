import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useGlobalState } from "../../data/GlobalState";
import yaml from "js-yaml";

function Contact() {
  const { state, dispatch } = useGlobalState();

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
          // console.log(result.text);
        },
        (error) => {
          // console.error(error.text);
        }
      );
  }

  const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        dispatch({
          type: actionType,
          payload: parsedData, // Verwenden Sie den übergebenen dataKey als Schlüssel
        });
      });
  };

  useEffect(() => {
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/contactPageData.yaml",
      dispatch,
      "SET_CONTACT_PAGE_DATA",
      "contactPageData.yaml"
    );
  }, [dispatch]);

  return (
    <div className="container bg-transparent mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl mb-4 text-color_font">
      {state.contactPageData.header && (
        <h1 className="text-4xl font-bold mt-8 mb-6">
          {state.contactPageData.header}
        </h1>
      )}

      {state.contactPageData.subheader && (
        <p className="text-lg  mt-4">{state.contactPageData.subheader}</p>
      )}

      <form className="flex flex-col mt-4 space-y-4">
        <div className="flex flex-col space-y-4">
          <div className="grow">
            <label htmlFor="firstName" className="block font-semibold">
              Vorname
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full h-8 border-black rounded border-2 bg-transparent"
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
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block font-semibold">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full h-8 border-black rounded border-2 bg-transparent"
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
