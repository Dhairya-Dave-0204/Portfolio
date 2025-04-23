import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, Loader } from "./components/component_index.js";
import { Home, About, Contact, Projects } from "./pages/page_index.js";
import "./App.css";

// Lazy load the three Spline components
const SplineComputer = React.lazy(() =>
  import("./components/SplineComputer/SplineComputer.jsx")
);
const SplineGlobe = React.lazy(() =>
  import("./components/SplineGlobe/SplineGlobe.jsx")
);
const SplineBackground = React.lazy(() =>
  import("./components/SplineBackground/SplineBackground.jsx")
);

function App() {
  const [loading, setLoading] = useState(true); // State to control preloader visibility
  const [isLoaded, setIsLoaded] = useState(false); // To track whether components are fully loaded

  // Start loading the Spline components and other assets immediately
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
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
