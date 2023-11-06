import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStateProvider } from "./data/GlobalState";

import "./index.css";

// Verwende ReactDOM.createRoot, um die Wurzelkomponente zu rendern
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wickel die App-Komponente mit dem GlobalStateProvider ein */}
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>
);
