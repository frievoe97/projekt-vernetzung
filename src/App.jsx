import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Adding a # to the URL (feels like an ugly fix but its working...)
import Layout from "./components/Layout";
import Anlaufstellen_V2 from "./components/anlaufstellen/Anlaufstellen_V2";
import Mission_V2 from "./components/mission/Mission_V2";
import { GlobalStateProvider } from "./data/GlobalState"; // Importieren Sie den AnlaufstellenProvider und useGlobalState
import NotFoundComponent from "./components/NotFoundComponent";
import Home_V2 from "./components/home/Home_V2";
import Gloassar_V2 from "./components/glossary/Gloassar_V2";

// import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        {/* Fügen Sie den AnlaufstellenProvider hier hinzu */}
        <GlobalStateProvider>
          <Routes>
            <Route path="/" element={<Home_V2 />} />
            <Route path="/anlaufstellen" element={<Anlaufstellen_V2 />} />
            <Route path="/ueber-uns" element={<Mission_V2 />} />
            {/* <Route
              path="/interviews/:organizationName"
              element={<InterviewDetail />}
            /> */}
            <Route path="/glossar" element={<Gloassar_V2 />} />
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
        </GlobalStateProvider>{" "}
      </Layout>
      {/* <CookieBanner /> */}
    </Router>
  );
}

export default App;
