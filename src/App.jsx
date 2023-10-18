import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Anlaufstellen from "./components/Anlaufstellen";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Interviews from "./components/Interviews";
import ExampleGlobalData from "./components/ExampleGlobalData";
import Glossar from "./components/Glossar";
import { GlobalStateProvider, useGlobalState } from "./data/GlobalState"; // Importieren Sie den AnlaufstellenProvider und useGlobalState
import yaml from "js-yaml";

function App() {
  const [acceptCookies, setAcceptCookies] = useState(true);
  const { state, dispatch } = useGlobalState(); // Zugriff auf den globalen Zustand und den Dispatch

  // Funktion, um den Zustand von acceptCookies zu aktualisieren
  const handleAcceptCookies = () => {
    setAcceptCookies(false);
  };

  // const fetchAndParseYamlData = (url, dispatch, actionType, dataKey) => {
  //   fetch(url)
  //     .then((response) => response.text())
  //     .then((yamlText) => {
  //       const parsedData = yaml.load(yamlText);
  //       dispatch({
  //         type: actionType,
  //         payload: parsedData[dataKey], // Verwenden Sie den übergebenen dataKey als Schlüssel
  //       });
  //     });
  // };

  // useEffect(() => {
  //   fetchAndParseYamlData(
  //     "https://raw.githubusercontent.com/frievoe97/projekt-vernetzung/main/src/data/anlaufstellenData.yaml",
  //     dispatch,
  //     "SET_ANLAUFSTELLEN_DATA",
  //     "anlaufstellenData" // Übergeben Sie den Namen des Schlüssels
  //   );
  // }, [dispatch]);

  return (
    <Router>
      <Layout>
        {/* Fügen Sie den AnlaufstellenProvider hier hinzu */}
        <GlobalStateProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anlaufstellen" element={<Anlaufstellen />} />
            <Route path="/unsere-mission" element={<Mission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route path="/example" element={<ExampleGlobalData />} />
            <Route path="/glossar" element={<Glossar />} />
          </Routes>
        </GlobalStateProvider>{" "}
      </Layout>
      {acceptCookies && (
        <div className="flex justify-between items-center gap-2 bg-gray-100 px-6 py-4 fixed bottom-0 left-0 w-full">
          <p className="text-sm text-gray-700">
            Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer
            Website zu bieten. Lerne&nbsp;
            <a href="#" className="underline">
              hier
            </a>
            &nbsp;mehr.
          </p>
          <button
            onClick={handleAcceptCookies}
            className="text-black bg-green-500 hover:bg-green-600 font-bold py-2 px-4 border-2 border-black rounded"
          >
            Accept
          </button>
        </div>
      )}
    </Router>
  );
}

export default App;
