
import { useState } from 'react'
import { HomePage } from './pages/home'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'

const tabs = [
  "Home",
  "Travel",
  "Registry",
  "Faq",
  "RSVP"
]

function App() {
  
  const [tab, setTab] = useState("Home")

  return (
    <>
    <NavBar tabs={tabs}/>
    {<HomePage/>}
      
    </>
  )
}

export default App
