import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EmergencyButton from "./EmergencyButton";
import { useGlobalState } from "../data/GlobalState";

import { getAllData } from "../client";
import { splitDataByType } from "../utils/functions";

function Layout({ children }) {
  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    // if (state.anlaufstellenFromSanity.length === 0) {
    console.log("Fetching all data from sanity");
    async function fetchAnlaufstellen() {
      try {
        const combinedData = await getAllData();
        let { interviews, anlaufstellen, glossary, glossaryTags } =
          splitDataByType(combinedData);

        dispatch({
          type: "SET_INTERVIEW_FROM_SANITY",
          payload: interviews,
        });

        dispatch({
          type: "SET_ANLAUFSTELLEN_FROM_SANITY",
          payload: anlaufstellen,
        });

        dispatch({
          type: "SET_GLOSSARY_FROM_SANITY",
          payload: glossary,
        });

        dispatch({
          type: "SET_GLOSSARY_TAGS_FROM_SANITY",
          payload: glossaryTags,
        });
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchAnlaufstellen();
    // }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-fm_weiss">
      <Navbar />
      <main className="flex-grow bg-fm_helles_beige min-h-[calc(100vh-22rem)]">
        {children}
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
