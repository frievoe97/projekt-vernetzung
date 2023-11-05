import React, { useState, useEffect, useRef } from "react";
import { useGlobalState } from "../data/GlobalState";

import yaml from "js-yaml";

function Footer() {
  // const { contact, newsletter, links } = data;

  const { state, dispatch } = useGlobalState();

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
    fetchAndParseYamlData(
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/pages/footer.yaml",
      dispatch,
      "SET_FOOTER_DATA"
    );
    console.log("Load Startseite Data: ", state.footer);
  }, [dispatch]);

  if (!state.footer.contact) {
    return <div>Hi</div>;
  }

  return (
    <div className="bg-fm_blau text-fm_weiss p-8  py-4 md:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h4 className="text-xl font-bold">Kontakt</h4>
            <p className="mt-2">{state.footer.contact.email}</p>
            <p>{state.footer.contact.location}</p>
            <p className="mt-6">{state.footer.contact.copyright}</p>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h4 className="text-xl font-bold">
              {state.footer.newsletter.heading}
            </h4>
            <p className="my-2">{state.footer.newsletter.text}</p>
            <button className="my-2 bg-red-500 hover:bg-red-600 text-fm_weiss px-4 py-2 rounded">
              {state.footer.newsletter.buttonLabel}
            </button>
            <div className="w-full md:w-auto flex flex-wrap">
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
