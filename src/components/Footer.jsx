import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../data/GlobalState";
import yaml from "js-yaml";
import ButtonBigRounded from "./elements/ButtonBigRounded";
import { data } from "autoprefixer";

/**
 * Footer ist eine React-Komponente, die den Footer der Website darstellt.
 * Sie zeigt Kontaktinformationen, einen Newsletter-Anmeldeabschnitt und Links an.
 */
function Footer() {
  const { state, dispatch } = useGlobalState();

  /**
   * fetchAndParseYamlData ist eine Funktion, die YAML-Daten von einer URL abruft und analysiert.
   * Sie aktualisiert den globalen Zustand (state) mit den geparsten Daten.
   *
   * @param {string} url - Die URL, von der die YAML-Daten abgerufen werden sollen.
   * @param {function} dispatch - Die Dispatch-Funktion, um den globalen Zustand zu aktualisieren.
   * @param {string} actionType - Der Aktionstyp, der zum Aktualisieren des Zustands verwendet wird.
   */
  const fetchAndParseYamlData = (url, dispatch, actionType) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
        // console.log(parsedData);
        dispatch({
          type: actionType,
          payload: parsedData,
        });
      });
  };

  useEffect(() => {
    // Die YAML-Daten für den Footer abrufen und analysieren
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/footer.yaml",
      dispatch,
      "SET_FOOTER_DATA"
    );
    // console.log("Load Footer Data: ", state.footer);
  }, [dispatch]);

  if (!state.footer.contact) {
    return <div></div>;
  }

  return (
    <div className="bg-fm_blau text-fm_weiss p-8 py-4 md:py-16 min-h-72">
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-between items-start justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 h-full md:p-4">
            {/* Kontaktinformationen anzeigen */}
            <h4 className="text-xl font-bold">Kontakt</h4>
            <a
              href="mailto:projekt-vernetzung@email.com"
              className="mt-2 text-fm_weiss hover:text-fm_weiss"
            >
              {state.footer.contact.email}
            </a>
            <p>{state.footer.contact.location}</p>
            <p className="mt-6">{state.footer.contact.copyright}</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0 h-full md:p-4">
            {/* Newsletter-Anmeldeabschnitt anzeigen */}
            <h4 className="text-xl font-bold">
              {state.footer.newsletter.heading}
            </h4>
            <p className="my-2">{state.footer.newsletter.text}</p>
            <div className="w-full">
              <button className="my-2 bg-fm_rosa hover:bg-fm_rosa text-fm_weiss px-4 py-2 rounded hover:border-none border-none hover:shadow-lg">
                {state.footer.newsletter.buttonLabel}
              </button>
            </div>
            <div className="w-full flex flex-wrap items-start">
              {/* Links anzeigen in einer flexiblen Box */}
              {state.footer.links.map((link, index) => (
                <Link
                  key={index}
                  className="text-fm_weiss hover:text-fm_weiss px-4 pr-4 pl-0 cursor-pointer"
                  to={link.url}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/4 h-full md:p-4">
            <h4 className="text-xl font-bold">Feedback</h4>
            {/* Links anzeigen */}
            <p>Du hast Feedback, dass du mit uns teilen willst?</p>
            <p>Dann schreib uns gerne eine Mail.</p>
            <div className="w-full">
              <button className="my-2 bg-fm_rosa hover:bg-fm_rosa text-fm_weiss px-4 py-2 rounded hover:border-none border-none hover:shadow-lg">
                Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
