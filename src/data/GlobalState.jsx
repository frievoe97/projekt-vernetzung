// AnlaufstellenContext.js

import React, { createContext, useContext, useReducer } from "react";

// Aktionstypen definieren
const SET_ANLAUFSTELLEN_DATA = "SET_ANLAUFSTELLEN_DATA";
const SET_HOME_DATA = "SET_HOME_DATA";
const SET_SLIDE_SHOW_DATA = "SET_SLIDE_SHOW_DATA";
const SET_GLOSSAR_DATA = "SET_GLOSSAR_DATA";
const SET_INTERVIEW_EXAMPLE = "SET_INTERVIEW_EXAMPLE";

// Reducer-Funktion
const reducer = (state, action) => {
  switch (action.type) {
    case SET_ANLAUFSTELLEN_DATA:
      return { ...state, anlaufstellenData: action.payload };
    case SET_HOME_DATA:
      return { ...state, homeData: action.payload };
    case SET_SLIDE_SHOW_DATA:
      return { ...state, slideshowData: action.payload };
    case SET_GLOSSAR_DATA:
      return { ...state, glossaryData: action.payload };
    case SET_INTERVIEW_EXAMPLE:
      return { ...state, interviewExample: action.payload };
    default:
      return state;
  }
};

// Initialer globaler Zustand
const initialState = {
  anlaufstellenData: [],
  homeData: [],
  slideshowData: [],
  glossaryData: [],
  interviewExample: [],
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
