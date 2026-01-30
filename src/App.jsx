import Topheader from '/src/components/header/Topheader.jsx'
import Bottomheader from '/src/components/header/Bottomheader.jsx'

import { Routes, Route } from 'react-router-dom'



export default function App() {
  return (
    <div>
      <Topheader />
      <Bottomheader />
    </div>
  );
}