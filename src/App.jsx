
import { useState } from 'react'
import { UnderConstruction } from './pages/UnderConstruction'
import './App.css'

function App() {


  // for a lazy-loading gallery element use <img src="" loading="lazy"/>
  const [tab, setTab] = useState("UnderConstruction");

  return (
    <>
      <UnderConstruction />
    </>
  )

}

export default App
