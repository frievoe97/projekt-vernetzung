import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useGlobalState } from "../data/GlobalState";

import yaml from "js-yaml";

const Navbar = () => {
  const { state, dispatch } = useGlobalState();
  const [openMenu, setOpenMenu] = useState(false); // Zustand für das Hauptmenü
  const [openSubmenu, setOpenSubmenu] = useState(null); // Zustand für die Untermenüs

  const updateWindowWidth = () => {
    // console.log(window.innerWidth);
    if (window.innerWidth <= 840) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  useEffect(() => {
    // Funktion, um die Bildschirmbreite zu aktualisieren
    updateWindowWidth();

    // Event-Listener für das "resize"-Event hinzufügen
    window.addEventListener("resize", updateWindowWidth);

    // Event-Listener entfernen, wenn die Komponente unmontiert wird
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  // Funktion zum Umschalten des Hauptmenüs
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Funktion zum Umschalten der Untermenüs
  // disableMenu -> dont toggle the menu off, when you click the arrow for the subitems...
  const toggleSubmenu = (index, disableMenu) => {
    setOpenSubmenu((prevOpenSubmenu) =>
      prevOpenSubmenu === index ? null : index
    );
    if (disableMenu != false) {
      updateWindowWidth();
    }
  };

  const fetchAndParseYamlData = (url, dispatch, actionType) => {
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
      "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/headerData.yaml",
      dispatch,
      "SET_HEADER_DATA",
      "headerData" // Übergeben Sie den Namen des Schlüssels
    );
  }, [dispatch]);

  if (!state.headerData.menuItems || !state.headerData.headerTitle) {
    return <h1>Loading...</h1>;
  }

  return (
    <nav className="z-30 bg-color_header border-black fixed top-0 left-0 right-0 shadow-2xl h-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex flex-row">
          <img className="w-10 mr-5" src="/logo-4.png" alt="" />
          <Link
            className="text-color_header_font hover:text-color_header_font self-center text-2xl font-semibold whitespace-nowrap"
            to="/"
          >
            {state.headerData.headerTitle}
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text-color_header_font rounded-lg md:hidden  focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 border-none"
          aria-controls="navbar-dropdown"
          aria-expanded={openMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`absolute top-full left-0 w-full md:relative md:w-auto ${
            openMenu ? "block" : "hidden" // Zeigen oder verbergen Sie das Hauptmenü basierend auf openMenu
          }`}
          id="navbar-dropdown"
        >
          <ul className="z-10 flex flex-col font-medium p-4 md:p-0 border border-gray-100 bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {state.headerData.menuItems.map((item, index) => (
              <li key={index}>
                {item.subItems ? (
                  <button
                    onClick={() => toggleSubmenu(index, false)}
                    id={`dropdownNavbarLink${index}`}
                    data-dropdown-toggle={`dropdownNavbar${index}`}
                    className={`z-10 flex text-color_header_font items-center justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent  md:bg-transparent md:border-0 md:p-0 md:w-auto hover:underline`}
                  >
                    {item.text}{" "}
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    className="block py-2 pl-3 pr-4 text-color_header_font hover:text-color_header_font rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  dark:hover:bg-gray-700  md:dark:hover:bg-transparent hover:underline"
                    to={item.url}
                    onClick={() => toggleSubmenu(index, true)}
                  >
                    {item.text}
                  </Link>
                )}

                {item.subItems && (
                  <div
                    id={`dropdownNavbar${index}`}
                    className={`z-10 ${
                      openSubmenu === index ? "block" : "hidden"
                    } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 relative`}
                  >
                    {/* Style für die dropdown Liste */}
                    <ul
                      className="z-20 text-color_header_font py-2 text-sm  md:absolute md:bg-white md:border md:border-black md:mt-4"
                      aria-labelledby={`dropdownLargeButton${index}`}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-color_header_font hover:text-color_header_font"
                            to={subItem.url}
                            onClick={() => toggleSubmenu(index, true)}
                          >
                            {subItem.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
