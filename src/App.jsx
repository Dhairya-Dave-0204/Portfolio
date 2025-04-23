import React, { useState, useEffect, Suspense } from "react";
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
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
