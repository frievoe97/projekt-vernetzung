// AnlaufstellenContext.js

import React, { createContext, useContext, useReducer } from "react";

// Aktionstypen definieren
const SET_ANLAUFSTELLEN_DATA = "SET_ANLAUFSTELLEN_DATA";
const SET_GLOSSAR_DATA = "SET_GLOSSAR_DATA";
const SET_MISSION_DATA = "SET_MISSION_DATA";
const SET_MACHTMISSBRAUCH_DATA = "SET_MACHTMISSBRAUCH_DATA";
const SET_LANDING_PAGE_DATA = "SET_LANDING_PAGE_DATA";
const SET_HEADER_DATA = "SET_HEADER_DATA";
const SET_CONTACT_PAGE_DATA = "SET_CONTACT_PAGE_DATA";
const SET_WARUM_JETZT_PAGE_DATA = "SET_WARUM_JETZT_PAGE_DATA";
const SET_WARUM_WIR_PAGE_DATA = "SET_WARUM_WIR_PAGE_DATA";

// Reducer-Funktion
const reducer = (state, action) => {
  switch (action.type) {
    case SET_ANLAUFSTELLEN_DATA:
      return { ...state, anlaufstellenData: action.payload };
    case SET_GLOSSAR_DATA:
      return { ...state, glossaryPageData: action.payload };
    case SET_MISSION_DATA:
      return { ...state, missionPageData: action.payload };
    case SET_MACHTMISSBRAUCH_DATA:
      return { ...state, machtmissbrauchPageData: action.payload };
    case SET_LANDING_PAGE_DATA:
      return { ...state, landingPageData: action.payload };
    case SET_HEADER_DATA:
      return { ...state, headerData: action.payload };
    case SET_CONTACT_PAGE_DATA:
      return { ...state, contactPageData: action.payload };
    case SET_WARUM_JETZT_PAGE_DATA:
      return { ...state, warumJetztPageData: action.payload };
    case SET_WARUM_WIR_PAGE_DATA:
      return { ...state, warumWirPageData: action.payload };
    default:
      return state;
  }
};

// Initialer globaler Zustand
const initialState = {
  anlaufstellenData: [],
  glossaryPageData: {},
  missionPageData: {},
  machtmissbrauchPageData: {},
  landingPageData: {},
  headerData: {},
  contactPageData: {},
  warumJetztPageData: {},
  warumWirPageData: {},
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
