import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Anlaufstellen_V2 from "./components/anlaufstellen/Anlaufstellen_V2";
import Mission_V2 from "./components/mission/Mission_V2";
import { GlobalStateProvider } from "./data/GlobalState";
import NotFoundComponent from "./components/NotFoundComponent";
import Home_V2 from "./components/home/Home_V2";
import Gloassar_V2 from "./components/glossary/Gloassar_V2";

import "./fonts/inter.ttf";
import Imprint from "./components/imprintAndDataPrivacy/Imprint";
import DataPrivacy from "./components/imprintAndDataPrivacy/DataPrivacy";
import Interviews from "./components/interviews/Interviews";

/**
 * App ist die Hauptkomponente der Anwendung und definiert die Routing-Struktur.
 */
function App() {
  return (
    <Router>
      <Layout>
        {/* Fügen Sie den AnlaufstellenProvider hier hinzu */}
        <GlobalStateProvider>
          <Routes>
            {/* Startseite */}
            <Route path="/" element={<Home_V2 />} />

            {/* Anlaufstellen */}
            <Route path="/anlaufstellen" element={<Anlaufstellen_V2 />} />

            {/* Über uns */}
            <Route path="/ueber-uns" element={<Mission_V2 />} />

            {/* Glossar */}
            <Route path="/glossar" element={<Gloassar_V2 />} />

            {/* Imprint */}
            <Route path="/imprint" element={<Imprint />} />

            {/* Data Privacy */}
            <Route path="/data-privacy" element={<DataPrivacy />} />

            {/* Interviews */}
            <Route path="/interviews-und-beitraege" element={<Interviews />} />

            {/* <Route
              path="/interviews/:organizationName"
              element={<InterviewDetail />}
            /> */}

            {/* Fehlerseite für unbekannte Routen */}
            <Route
              path="*"
              element={
                <NotFoundComponent
                  text={"Die angeforderte Seite existiert nicht."}
                  buttonText={"Zurück zur Startseite"}
                  link={"/"}
                />
              }
            />
          </Routes>
        </GlobalStateProvider>
      </Layout>
    </Router>
  );
}

export default App;
