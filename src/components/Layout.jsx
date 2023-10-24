import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EmergencyButton from "./EmergencyButton";

function Layout({ children }) {
  return (
    // Kommentar früher: bg-color_4 jetzt: bg-gradient-to-r from-color_2 via-color_3 to-color_4
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-color_background_1 to-color_background_2 ">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
      <EmergencyButton />
    </div>
  );
}

export default Layout;
