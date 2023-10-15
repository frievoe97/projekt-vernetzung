import React, { useState, useEffect } from "react";

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
      subItems: [
        { text: "Test 1", url: "/" },
        { text: "Test 2", url: "/" },
      ],
      url: "",
    },
    { text: "Anlaufstellen", url: "/anlaufstellen" },
    { text: "Interviews", url: "/interviews" },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 right-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Projekt Vernetzen
        </span>
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
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.subItems ? (
                  <button
                    onClick={() => toggleSubmenu(index)}
                    id={`dropdownNavbarLink${index}`}
                    data-dropdown-toggle={`dropdownNavbar${index}`}
                    className={`bg-white flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
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
                  <a
                    href={item.url}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {item.text}
                  </a>
                )}

                {item.subItems && (
                  <div
                    id={`dropdownNavbar${index}`}
                    className={`z-10 ${
                      openSubmenu === index ? "block" : "hidden"
                    } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby={`dropdownLargeButton${index}`}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.url}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {subItem.text}
                          </a>
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
