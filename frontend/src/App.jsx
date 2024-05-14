import { useState } from 'react'
import './App.css'
import Home  from "./pages/Home";
import Charts from "./pages/Charts";
import Upload from "./pages/Upload";
import Saved from "./pages/Saved";
import { Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/saved " element={<Saved />} />
     </Routes>
    </>
  )
}

export default App
