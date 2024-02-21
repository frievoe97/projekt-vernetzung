// AnlaufstellenContext.js

import React, { createContext, useContext, useReducer } from "react";

// Aktionstypen definieren
const SET_ANLAUFSTELLEN_DATA = "SET_ANLAUFSTELLEN_DATA";
const SET_HEADER_DATA = "SET_HEADER_DATA";
const SET_STARTSEITE_DATA = "SET_STARTSEITE_DATA";
const SET_UEBER_UNS_DATA = "SET_UEBER_UNS_DATA";
const SET_GLOSSAR_PAGE_DATA = "SET_GLOSSAR_PAGE_DATA";
const SET_FOOTER_DATA = "SET_FOOTER_DATA";
const SET_GLOSSARY_NEW_DATA = "SET_GLOSSARY_NEW_DATA";
const SET_INTERVIEW_DATA = "SET_INTERVIEW_DATA";
const SET_INTERVIEW_V_2_DATA = "SET_INTERVIEW_V_2_DATA";
const SET_INTERVIEW_FROM_SANITY = "SET_INTERVIEW_FROM_SANITY";

// Reducer-Funktion
const reducer = (state, action) => {
  switch (action.type) {
    case SET_ANLAUFSTELLEN_DATA:
      return { ...state, anlaufstellenData: action.payload };
    case SET_HEADER_DATA:
      return { ...state, headerData: action.payload };
    case SET_STARTSEITE_DATA:
      return { ...state, startseiteData: action.payload };
    case SET_UEBER_UNS_DATA:
      return { ...state, ueberUns: action.payload };
    case SET_GLOSSAR_PAGE_DATA:
      return { ...state, glossarData: action.payload };
    case SET_FOOTER_DATA:
      return { ...state, footer: action.payload };
    case SET_GLOSSARY_NEW_DATA:
      return { ...state, glossaryNew: action.payload };
    case SET_INTERVIEW_DATA:
      return { ...state, interviews: action.payload };
    case SET_INTERVIEW_V_2_DATA:
      return { ...state, interviewsV2: action.payload };
    case SET_INTERVIEW_FROM_SANITY:
      return { ...state, interviewFromSanity: action.payload };
    default:
      return state;
  }
};

// Initialer globaler Zustand
const initialState = {
  anlaufstellenData: [],
  headerData: {},
  startseiteData: {},
  ueberUns: {},
  glossarData: {},
  glossaryNew: {},
  footer: {},
  interviews: [],
  interviewsV2: {},
  interviewFromSanity: [],
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
