
import { useState } from 'react'
import { HomePage } from './pages/home'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import { Travel } from './pages/Travel'
import { Registry } from './pages/Registry'
import { Faq } from './pages/Faq'
import { RSVP } from './pages/RSVP'

const tabs = [
  "Home",
  "Travel",
  "Registry",
  "Faq",
  "RSVP"
]

function App() {
  // for a lazy-loading gallery element use <img src="" loading="lazy"/>
  const [tab, setTab] = useState("Home")
  console.log(tab)
  return (
    <>
      <NavBar tabs={tabs} setTab={setTab} />
      {tab === "Home" && <HomePage />}
      {tab === "Travel" && <Travel />}
      {tab === "Registry" && <Registry />}
      {tab === "Faq" && <Faq />}
      {tab === "RSVP" && <RSVP />}
      
    </>
  )
}

export default App
