import React from "react";
import PropTypes from "prop-types"; // Importiere PropTypes für die Typüberprüfung der Props
import Navbar from "./Navbar";
import Footer from "./Footer";
import EmergencyButton from "./EmergencyButton";

/**
 * Layout ist eine React-Komponente, die das grundlegende Layout der Website definiert.
 * Sie enthält die Navigationsleiste (Navbar), den Hauptinhalt (children), den Footer und einen Notfallbutton.
 *
 * Header height: h-16 4rem
 * Footer height: min-h-72 18rem
 *
 * @param {Object} props - Die Props für die Komponente.
 * @param {ReactNode} props.children - Der Hauptinhalt der Website, der zwischen Navbar und Footer angezeigt wird.
 * @returns {JSX.Element} - Die gerenderte Komponente.
 */
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-fm_weiss">
      {/* Navigationsleiste (Navbar) */}
      <Navbar />

      {/* Hauptinhalt der Website */}
      <main className="flex-grow bg-fm_helles_beige min-h-[calc(100vh-22rem)]">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Notfallbutton */}
      <EmergencyButton />
    </div>
  );
}

// PropTypes für Typüberprüfung der Props hinzufügen
Layout.propTypes = {
  children: PropTypes.node.isRequired, // children muss ein React-Knoten sein und ist erforderlich.
};

export default Layout;
