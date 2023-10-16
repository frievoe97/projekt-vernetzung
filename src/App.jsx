import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Anlaufstellen from "./components/Anlaufstellen";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Interviews from "./components/Interviews";
import ExampleGlobalData from "./components/ExampleGlobalData";
import { GlobalStateProvider } from "./data/GlobalState"; // Importieren Sie den AnlaufstellenProvider

function App() {
  const [acceptCookies, setAcceptCookies] = useState(true);

  // Funktion, um den Zustand von acceptCookies zu aktualisieren
  const handleAcceptCookies = () => {
    setAcceptCookies(false);
  };

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
          </Routes>
        </GlobalStateProvider>{" "}
      </Layout>
      {acceptCookies == true && (
        <div className="flex justify-between items-center gap-2 bg-gray-100 px-4 py-2 fixed bottom-0 left-0 w-full">
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
