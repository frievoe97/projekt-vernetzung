import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EmergencyButton from "./EmergencyButton";

function Layout({ children }) {
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
