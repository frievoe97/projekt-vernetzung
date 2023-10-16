// AnlaufstellenContext.js

import React, { createContext, useContext, useReducer } from "react";

// Aktionstypen definieren
const SET_ANLAUFSTELLEN_DATA = "SET_ANLAUFSTELLEN_DATA";
const SET_ZUSATZDATEN = "SET_ZUSATZDATEN";
const SET_HOME_DATA = "SET_HOME_DATA";
const SET_SLIDE_SHOW_DATA = "SET_SLIDE_SHOW_DATA";
const SET_GLOSSAR_DATA = "SET_GLOSSAR_DATA";

// Reducer-Funktion
const reducer = (state, action) => {
  switch (action.type) {
    case SET_ANLAUFSTELLEN_DATA:
      return { ...state, anlaufstellenData: action.payload };
    case SET_ZUSATZDATEN:
      return { ...state, zusatzDaten: action.payload };
    case SET_HOME_DATA:
      return { ...state, homeData: action.payload };
    case SET_SLIDE_SHOW_DATA:
      return { ...state, slideshowData: action.payload };
    case SET_GLOSSAR_DATA:
      return { ...state, glossaryData: action.payload };
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
  glossaryData: [
    {
      term: "Patriarchat",
      definition:
        "Das Patriarchat ist ein gesellschaftliches System, in dem Männer die dominante und vorherrschende Rolle in Politik, Wirtschaft, Kultur und anderen Bereichen einnehmen und Frauen systematisch unterdrückt werden. Dieses System neigt dazu, männliche Privilegien zu fördern und Frauen in vielen Aspekten des Lebens zu benachteiligen, indem es Geschlechterstereotype aufrechterhält und Geschlechterungleichheit verstärkt.",
    },
    {
      term: "Gaslighting",
      definition:
        "Gaslighting ist eine Form emotionaler Missbrauch, bei dem eine Person versucht, die Realität einer anderen Person zu verzerren und sie dazu zu bringen, an ihrem eigenen Verstand zu zweifeln. Dies geschieht oft durch wiederholte Lügen, Manipulationen und das Infragestellen der Wahrnehmung der betroffenen Person. Gaslighting kann schwerwiegende psychische Auswirkungen haben und ist ein Verhalten, das dringend abgelehnt werden sollte.",
    },
    {
      term: "toxische Maskulinität",
      definition:
        "Toxische Maskulinität bezieht sich auf eine gesellschaftliche Konstruktion von Männlichkeit, die schädlich ist, da sie Männer dazu ermutigt, Aggression, Dominanz und emotionale Zurückhaltung zu zeigen, anstatt gesunde emotionale Ausdrucksfähigkeit. Dieses Konzept kritisiert die Idee, dass Männer stets stoisch und unempfindlich sein sollten und fördert stattdessen die Vorstellung von Männlichkeit, die sich auf Empathie, Vulnerabilität und positive zwischenmenschliche Beziehungen stützt.",
    },
    {
      term: "Feminismus",
      definition:
        "Feminismus ist eine soziale und politische Bewegung, die sich für die Gleichstellung der Geschlechter und die Beseitigung von Geschlechterdiskriminierung einsetzt. Der Feminismus strebt an, soziale, politische und wirtschaftliche Veränderungen herbeizuführen, um Frauen die gleichen Chancen und Rechte wie Männern zu ermöglichen. Feministinnen setzen sich für die Beseitigung von Geschlechterstereotypen, die Anerkennung von Frauenrechten und die Stärkung von Frauen in verschiedenen Lebensbereichen ein.",
    },
    {
      term: "Belästigung",
      definition:
        "Belästigung umfasst unerwünschtes, aufdringliches Verhalten, das das Wohlbefinden und die Sicherheit von Personen bedroht, insbesondere von Frauen, und oft auf Geschlecht, Rasse oder sexuelle Orientierung basiert. Dieses Verhalten kann verbal, physisch oder online auftreten und reicht von sexueller Belästigung bis zu rassistischer oder sexistischer Diskriminierung. Die Bekämpfung von Belästigung ist entscheidend für die Schaffung einer sicheren und inklusiven Gesellschaft.",
    },
    {
      term: "Frauenrechte",
      definition:
        "Frauenrechte sind Menschenrechte, die speziell auf die Gleichstellung und den Schutz der Rechte von Frauen abzielen, einschließlich Rechten auf Bildung, Gesundheit, Arbeit und politische Teilhabe. Die Anerkennung und Durchsetzung von Frauenrechten sind entscheidend, um die Geschlechterungleichheit zu beseitigen und sicherzustellen, dass Frauen in allen Aspekten des Lebens gleichberechtigt sind.",
    },
    {
      term: "Empowerment",
      definition:
        "Empowerment bezieht sich auf die Befähigung von Personen, insbesondere Frauen, durch Bildung, Ressourcen und Selbstbewusstsein, um Kontrolle über ihr eigenes Leben und ihre Entscheidungen zu übernehmen. Es zielt darauf ab, individuelle und kollektive Stärke zu fördern und Menschen die Fähigkeit zu geben, aktiv an gesellschaftlichen Veränderungen teilzunehmen und ihre eigenen Ziele zu verfolgen.",
    },
    {
      term: "Sexismus",
      definition:
        "Sexismus ist die Diskriminierung oder Vorurteile aufgrund des Geschlechts und kann sich in verschiedenen Formen manifestieren, wie Stereotypisierung, Vorurteile und Benachteiligung von Frauen. Sexismus kann subtil oder offensichtlich sein und hat weitreichende Auswirkungen auf das Leben von Frauen in Bereichen wie Bildung, Beruf und sozialer Interaktion. Die Bekämpfung von Sexismus ist ein wichtiger Schritt zur Schaffung einer gerechten und inklusiven Gesellschaft.",
    },
    {
      term: "Intersectionality",
      definition:
        "Intersectionality ist ein Konzept, das die Wechselwirkungen zwischen verschiedenen Formen der Diskriminierung und Unterdrückung, einschließlich Geschlecht, Rasse, Klasse und sexueller Orientierung, berücksichtigt. Es erkennt an, dass Menschen mehreren Unterdrückungsformen gleichzeitig ausgesetzt sein können und dass diese Faktoren miteinander verflochten sind. Intersectionality betont die Notwendigkeit, soziale Gerechtigkeit auf eine umfassende und inklusive Weise anzugehen.",
    },
    {
      term: "Feministische Solidarität",
      definition:
        "Feministische Solidarität bedeutet, dass Frauen und Feministinnen zusammenarbeiten, um gemeinsame Ziele zu erreichen, und sich gegenseitig unterstützen, um Geschlechtergleichheit und soziale Gerechtigkeit voranzutreiben. Dies schließt die Anerkennung der Vielfalt feministischer Perspektiven und Erfahrungen ein und betont die Bedeutung von gemeinsamer Arbeit zur Überwindung von Diskriminierung und Ungerechtigkeit aufgrund des Geschlechts.",
    },
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
