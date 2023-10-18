import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EmergencyButton from "./EmergencyButton";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-color_4">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
      <EmergencyButton />
    </div>
  );
}

export default Layout;
