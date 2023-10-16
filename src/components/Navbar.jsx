import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); // Zustand für das Hauptmenü
  const [openSubmenu, setOpenSubmenu] = useState(null); // Zustand für die Untermenüs

  const updateWindowWidth = () => {
    if (window.innerWidth <= 768) {
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
  const toggleSubmenu = (index) => {
    setOpenSubmenu((prevOpenSubmenu) =>
      prevOpenSubmenu === index ? null : index
    );
  };

  const menuItems = [
    { text: "Home", url: "/" },
    {
      text: "Über Uns",
      subItems: [
        { text: "Unsere Mission", url: "/unsere-mission" },
        { text: "Machtmissbrauch", url: "/" },
        { text: "Warum Jetzt?", url: "/" },
        { text: "Warum Wir?", url: "/" },
        { text: "Kontakt", url: "/contact" },
      ],
    },
    {
      text: "Glossar",
      url: "/glossar",
    },
    { text: "Anlaufstellen", url: "/anlaufstellen" },
    { text: "Interviews", url: "/interviews" },
  ];

  return (
    <nav className="z-30 bg-blue_light border-black fixed top-0 left-0 right-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex flex-row">
          <img className="w-10 mr-5" src="/logo.png" alt="" />
          <Link
            className="text-black hover:text-black self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            to="/"
          >
            Projekt Vernetzen e.V.
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <ul className="z-10 flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.subItems ? (
                  <button
                    onClick={() => toggleSubmenu(index)}
                    id={`dropdownNavbarLink${index}`}
                    data-dropdown-toggle={`dropdownNavbar${index}`}
                    className={`z-10 flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:bg-transparent md:border-0 md:hover:text-black md:p-0 md:w-auto dark:text-white md:dark:hover:text-black dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:underline`}
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
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:text-black hover:underline"
                    to={item.url}
                    onClick={() => toggleSubmenu(index)}
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
                      className="z-20 text-black py-2 text-sm text-gray-700 dark:text-gray-400 md:absolute md:bg-white md:border md:border-black md:mt-4"
                      aria-labelledby={`dropdownLargeButton${index}`}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black hover:text-black"
                            to={subItem.url}
                            onClick={() => toggleSubmenu(index)}
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
      <hr></hr>
    </nav>
  );
};

export default Navbar;
