import React, { useEffect } from "react";
import { useGlobalState } from "../data/GlobalState";
import yaml from "js-yaml";

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
        console.log(parsedData);
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
    console.log("Load Footer Data: ", state.footer);
  }, [dispatch]);

  if (!state.footer.contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-fm_blau text-fm_weiss p-8 py-4 md:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            {/* Kontaktinformationen anzeigen */}
            <h4 className="text-xl font-bold">Kontakt</h4>
            <p className="mt-2">{state.footer.contact.email}</p>
            <p>{state.footer.contact.location}</p>
            <p className="mt-6">{state.footer.contact.copyright}</p>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            {/* Newsletter-Anmeldeabschnitt anzeigen */}
            <h4 className="text-xl font-bold">
              {state.footer.newsletter.heading}
            </h4>
            <p className="my-2">{state.footer.newsletter.text}</p>
            <button className="my-2 bg-red-500 hover:bg-red-600 text-fm_weiss px-4 py-2 rounded">
              {state.footer.newsletter.buttonLabel}
            </button>
            <div className="w-full md:w-auto flex flex-wrap">
              {/* Links anzeigen */}
              {state.footer.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-fm_weiss hover:text-fm_weiss px-4 pr-4 pl-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
