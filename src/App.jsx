import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from "./components/component_index.js"
import { Home } from "./pages/page_index.js"
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
