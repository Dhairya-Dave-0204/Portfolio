import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, Loader } from "./components/component_index.js";
import { Home, About, Contact, Projects } from "./pages/page_index.js";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
