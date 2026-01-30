import Topheader from '/src/components/header/Topheader.jsx'
import Bottomheader from '/src/components/header/Bottomheader.jsx'
import Home from '/src/pages/Home.jsx'
import Contact from '/src/pages/Contact.jsx'
import Accessories from '/src/pages/Accessories.jsx'
import About from '/src/pages/About.jsx'
import Add from '/src/pages/Add.jsx'
import Login from '/src/pages/Login.jsx'

import { Routes, Route } from 'react-router-dom'



export default function App() {
  return (
    <div>
        <Topheader/>
        <Bottomheader/>
      <Routes>
        {/* <Route path="/Topheader" element={<Topheader />} />
        <Route path="/Bottomheader" element={<Bottomheader />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/About" element={<About />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}