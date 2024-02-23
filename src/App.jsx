import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Anlaufstellen_V2 from "./components/anlaufstellen/Anlaufstellen_V2";
import Mission_V2 from "./components/mission/Mission_V2";
import { GlobalStateProvider } from "./data/GlobalState";
import NotFoundComponent from "./components/NotFoundComponent";
import Home_V2 from "./components/home/Home_V2";
import Gloassar_V2 from "./components/glossary/Gloassar_V2";

import "./fonts/inter.ttf";
import Imprint from "./components/imprint/Imprint";
import DataPrivacy from "./components/imprint/DataPrivacy";
import Interviews from "./components/interviews/Interviews";
import InterviewDetail from "./components/interviews/InterviewDetail";

// import { getAllData } from "./client";
// import { splitDataByType } from "./utils/functions";

function App() {
  // useEffect(() => {
  //   // if (state.anlaufstellenFromSanity.length === 0) {
  //   console.log("Fetching all data from sanity");
  //   async function fetchAnlaufstellen() {
  //     try {
  //       let combinedData = await getAllData();
  //       console.log("combinedData", splitDataByType(combinedData));
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //     }
  //   }

  //   fetchAnlaufstellen();
  //   // }
  // }, []);

  return (
    <GlobalStateProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home_V2 />} />
            <Route path="/anlaufstellen" element={<Anlaufstellen_V2 />} />
            <Route path="/ueber-uns" element={<Mission_V2 />} />
            <Route path="/glossar" element={<Gloassar_V2 />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/data-privacy" element={<DataPrivacy />} />
            <Route path="/interviews-und-beitraege" element={<Interviews />} />
            <Route
              path="/interviews-und-beitraege/:organizationName"
              element={<InterviewDetail />}
            />
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
        </Layout>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
