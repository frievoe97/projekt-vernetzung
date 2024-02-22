import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../data/GlobalState";
import yaml from "js-yaml";

function Footer() {
  const { state, dispatch } = useGlobalState();

  const fetchAndParseYamlData = (url, dispatch, actionType) => {
    fetch(url)
      .then((response) => response.text())
      .then((yamlText) => {
        const parsedData = yaml.load(yamlText);
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
    <footer className="bg-fm_grau_dark text-fm_weiss p-8 py-8 md:py-4 min-h-72 text-sm">
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row justify-between items-start justify-between">
          <div className="w-full md:w-1/3  h-full md:p-4">
            {/* Kontaktinformationen anzeigen */}
            <h4 className="text-xl font-bold">
              {state.footer.contact.heading}
            </h4>
            <div className="my-2">
              <div className="flex">
                <div className="mr-2">
                  {state.footer.contact.rows[0].title}:
                </div>
                <a
                  href="mailto:projekt-vernetzung@email.com"
                  className="hover:text-fm_weiss text-fm_weiss font-normal cursor-pointer"
                >
                  {state.footer.contact.rows[0].text}
                </a>
              </div>
              <div className="flex">
                <div className="mr-2">
                  {state.footer.contact.rows[1].title}:
                </div>
                <a
                  href="https://www.instagram.com/projekt.vernetzung"
                  className="hover:text-fm_weiss text-fm_weiss font-normal cursor-pointer"
                  target="_blank"
                >
                  {state.footer.contact.rows[1].text}
                </a>
              </div>
              <div className="flex">
                <div>{state.footer.contact.rows[2].title}</div>
              </div>
              <p className="mt-6">{state.footer.contact.copyright}</p>
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
              <p className="mt-2">
                Diese Seite wurde von{" "}
                <a
                  className="text-white hover:text-white font-normal"
                  href="https://github.com/frievoe97"
                  target="_blank"
                >
                  Friedrich Völkers{" "}
                </a>
                erstellt und ist OpenSource auf{" "}
                <a
                  className="text-white hover:text-white font-normal"
                  href="https://github.com/frievoe97/projekt-vernetzung"
                  target="_blank"
                >
                  GitHub
                </a>{" "}
                gespeichert.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0 h-full md:p-4">
            {/* Newsletter-Anmeldeabschnitt anzeigen */}
            <h4 className="text-xl font-bold">
              {state.footer.newsletter.heading}
            </h4>
            <p className="my-2">{state.footer.newsletter.text}</p>
            <div className="w-full">
              <button className="my-2 bg-fm_rosa hover:bg-fm_rosa text-fm_weiss px-4 py-2 rounded hover:border-none border-none hover:shadow-lg font-bold">
                <a
                  href="mailto:info@projekt-vernetzung.org?subject=Newsletter%20Anmeldung&body=Hey!%0A%0AIch%20würde%20gerne%20euren%20Newsletter%20abonnieren"
                  className="text-fm_weiss hover:text-fm_weiss font-bold"
                >
                  {state.footer.newsletter.buttonLabel}
                </a>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-full mb-4 md:mb-0 md:p-4">
            <h4 className="text-xl font-bold">
              {state.footer.feedback.heading}
            </h4>
            <p className="my-2">{state.footer.feedback.text}</p>
            {/* Links anzeigen */}
            <div className="w-full">
              <button className="my-2 bg-fm_rosa hover:bg-fm_rosa text-fm_weiss px-4 py-2 rounded hover:border-none border-none hover:shadow-lg font-bold">
                <a
                  href="mailto:projekt-vernetzung@email.com?subject=Feedback"
                  className="text-fm_weiss hover:text-fm_weiss font-bold"
                >
                  {state.footer.feedback.buttonLabel}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
