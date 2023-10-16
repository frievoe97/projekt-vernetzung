// AnlaufstellenContext.js

import React, { createContext, useContext, useReducer } from "react";

// Aktionstypen definieren
const SET_ANLAUFSTELLEN_DATA = "SET_ANLAUFSTELLEN_DATA";
const SET_ZUSATZDATEN = "SET_ZUSATZDATEN"; // Neue Aktion für zusätzliche Daten
const SET_HOME_DATA = "SET_HOME_DATA"; // Neue Aktion für zusätzliche Daten
const SET_SLIDE_SHOW_DATA = "SET_SLIDE_SHOW_DATA"; // Neue Aktion für zusätzliche Daten

// Reducer-Funktion
const reducer = (state, action) => {
  switch (action.type) {
    case SET_ANLAUFSTELLEN_DATA:
      return { ...state, anlaufstellenData: action.payload };
    case SET_ZUSATZDATEN:
      return { ...state, zusatzDaten: action.payload };
    case SET_HOME_DATA:
      return { ...state, homeData: action.payload }; // Neue Aktion zum Setzen von Zusatzdaten
    case SET_SLIDE_SHOW_DATA:
      return { ...state, slideshowData: action.payload }; // Neue Aktion zum Setzen von Zusatzdaten
    default:
      return state;
  }
};

// Initialer globaler Zustand
const initialState = {
  anlaufstellenData: [
    {
      id: 1,
      name: "WEISSER RING",
      image:
        "https://images.pexels.com/photos/7176317/pexels-photo-7176317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Eine kurze Beschreibung der Anlaufstelle 1.",
      link: "https://example.com/anlaufstelle1",
      tags: ["Hilfe", "Opfer", "Beratung"],
      date: "28.05.19",
      interviewShort:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 2,
      name: "Notfall Telefon",
      image:
        "https://images.pexels.com/photos/7176317/pexels-photo-7176317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Eine kurze Beschreibung der Anlaufstelle 2.",
      link: "https://example.com/anlaufstelle2",
      tags: ["Notfall", "Telefon", "Unterstützung"],
      date: "28.05.19",
      interviewShort:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      id: 3,
      name: "Verein gegen sexuelle Übergriffe",
      image:
        "https://images.pexels.com/photos/7176317/pexels-photo-7176317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Eine kurze Beschreibung der Anlaufstelle 3.",
      link: "https://example.com/anlaufstelle3",
      tags: ["Verein", "Schutz", "Übergriffe"],
      date: "28.05.19",
      interviewShort:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    // Weitere Anlaufstellen hier
  ],
  zusatzDaten: "Initialwert für zusätzliche Daten",
  homeData: [
    {
      imageSrc:
        "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Alle Branchen und Lebensbereiche betroffen",
      text: "Nicht jeder Fall von Machtmissbrauch gleicht den zuletzt medial stark thematisierten Extremen. Viel passiert “im Kleinen”. Zudem bleiben drastische Fälle, aus Angst der Betroffenen zu Sprechen, im Dunkeln. Dabei gleichen sich übergeordnete Strukturen, die Machtmissbrauch befördern, aber auch von Täter:innen angewandte Strategien über verschiedene Bereiche hinweg. Eine vorbeugende gesellschaftliche und individuelle Auseinandersetzung mit diesen Mustern ist wichtig, um frühzeitiger für Betroffene eingreifen zu können.",
      buttonText: "Mehr erfahren",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Was tun wir?",
      text: "Zahlreiche Expert:innen helfen durch ihre Forschung, ihre Arbeit oder Erlebnisberichte, Machtmissbrauch in seinen verschiedenen Facetten zu erläutern und dafür zu sensibilisieren. Indem wir ihre vielfältigen Stimmen hier zu Wort kommen lassen, möchten wir die Problematik in ihrer vollen Dimension begreifbar machen und verdeutlichen, wie weit verbreitet sie in unserer Gesellschaft ist. Nicht zuletzt möchten wir den Zugang Betroffener zu relevanten Informationen vereinfachen und ihnen helfen, Worte für das Erlebte zu finden.",
      buttonText: "Mehr erfahren",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Was kannst du tun?",
      text: "Dort, wo Machtmissbrauch stattfindet, machen ihn gewisse Strukturen erst möglich. Uns über diese zu informieren, um sie zu erkennen und zu überdenken, ist für uns alle ein erster und wichtiger Schritt. Weiterhin können wir gemeinsam zu einer öffentlichen Entstigmatisierung des Themas beitragen, damit Betroffene einfacher über Unrecht sprechen können und besser geschützt werden.",
      buttonText: "Mehr über uns",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Alle Branchen und Lebensbereiche betroffen",
      text: "Nicht jeder Fall von Machtmissbrauch gleicht den zuletzt medial stark thematisierten Extremen. Viel passiert “im Kleinen”. Zudem bleiben drastische Fälle, aus Angst der Betroffenen zu Sprechen, im Dunkeln. Dabei gleichen sich übergeordnete Strukturen, die Machtmissbrauch befördern, aber auch von Täter:innen angewandte Strategien über verschiedene Bereiche hinweg. Eine vorbeugende gesellschaftliche und individuelle Auseinandersetzung mit diesen Mustern ist wichtig, um frühzeitiger für Betroffene eingreifen zu können.",
      buttonText: "Mehr erfahren",
    },
  ],
  slideshowData: [
    {
      imageSrc:
        "https://images.pexels.com/photos/4098368/pexels-photo-4098368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Beratung für Opfer",
      text: "Unsere Beratungsangebote bieten Unterstützung und Hilfe für Opfer von Machtmissbrauch.",
      buttonText: "Mehr Informationen",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/7176317/pexels-photo-7176317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Fachliche Unterstützung",
      text: "Erfahrene Fachleute stehen Ihnen zur Verfügung, um Sie bei der Bewältigung von Machtmissbrauch zu unterstützen.",
      buttonText: "Mehr Informationen",
    },
    // Weitere Daten für Ihre Slideshow
  ],
};

// Context erstellen
const AnlaufstellenContext = createContext();

// Provider-Komponente
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AnlaufstellenContext.Provider value={{ state, dispatch }}>
      {children}
    </AnlaufstellenContext.Provider>
  );
};

// Hook zum Verwenden des globalen Zustands
export const useGlobalState = () => {
  const context = useContext(AnlaufstellenContext);
  if (!context) {
    throw new Error(
      "useGlobalState must be used within an AnlaufstellenProvider"
    );
  }
  return context;
};
