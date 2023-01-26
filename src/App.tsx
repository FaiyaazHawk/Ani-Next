import React from 'react'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Search from "./Components/Search"
import InfoPage from './Components/InfoPage'
import EpisodePage from './Components/EpisodePage'
import {Route, Routes} from "react-router-dom"
import './Styles/App.css'


function App() {

  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home  />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/:id" element={<InfoPage />} />
        <Route path="/video/:id" element={<EpisodePage />} />
      </Routes>
    </div>
  )
}

export default App
