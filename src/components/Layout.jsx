import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-blue_light">
      <Navbar />
      <main className="flex-grow pt-16 bg-white ">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
