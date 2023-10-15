import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Anlaufstellen from "./components/Anlaufstellen";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Interviews from "./components/Interviews";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anlaufstellen" element={<Anlaufstellen />} />
          <Route path="/unsere-mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interviews" element={<Interviews />} />
          {/* Weitere Routen hier hinzufügen */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
