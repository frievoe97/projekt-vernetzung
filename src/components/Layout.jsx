import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EmergencyButton from "./EmergencyButton";

function Layout({ children }) {
  return (
    // Kommentar früher: bg-gradient-to-r from-color_background_1 to-color_background_2
    <div className="flex flex-col min-h-screen bg-fm_weiss">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <EmergencyButton />
    </div>
  );
}

export default Layout;
