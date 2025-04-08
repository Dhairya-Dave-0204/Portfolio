import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from "./components/component_index.js"
import { Home, About, Contact, Projects } from "./pages/page_index.js"
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
     {/* <Footer /> */} 
    </>
  )
}

export default App
