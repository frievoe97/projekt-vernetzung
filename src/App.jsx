import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Adding a # to the URL (feels like an ugly fix but its working...)
import Layout from "./components/Layout";
import Home from "./components/Home";
import Anlaufstellen from "./components/Anlaufstellen";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Interviews from "./components/Interviews";
import Glossar from "./components/Glossar";
import InterviewDetail from "./components/InterviewDetail";
import { GlobalStateProvider } from "./data/GlobalState"; // Importieren Sie den AnlaufstellenProvider und useGlobalState
import ScrollToTop from "./components/utils/ScrollToTop";
import Machtmissbrauch from "./components/Machtmissbrauch";
import WarumJetzt from "./components/WarumJetzt";
import Examples from "./components/Examples";
import CookieBanner from "./components/CookieBanner";
import NotFoundComponent from "./components/NotFoundComponent";
import WarumWir from "./components/WarumWir";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <Layout>
        {/* Fügen Sie den AnlaufstellenProvider hier hinzu */}
        <GlobalStateProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anlaufstellen" element={<Anlaufstellen />} />
            <Route path="/unsere-mission" element={<Mission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route
              path="/interviews/:organizationName"
              element={<InterviewDetail />}
            />
            <Route path="/example" element={<Examples />} />
            <Route path="/glossar" element={<Glossar />} />
            <Route path="/machtmissbrauch" element={<Machtmissbrauch />} />
            <Route path="/warum-jetzt" element={<WarumJetzt />} />
            <Route path="/warum-wir" element={<WarumWir />} />
            <Route path="/test" element={<Test />} />
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
      <CookieBanner />
    </Router>
  );
}

export default App;
