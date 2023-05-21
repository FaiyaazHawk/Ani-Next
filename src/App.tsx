import React from 'react'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Search from "./Components/Search"
import SearchFlix from "./Components/SearchFlix"
import InfoPage from './Components/InfoPage'
import FlixPageTV from './Components/FlixPageTV'
import FlixPageMovie from './Components/FlixPageMovie'
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
        <Route path="/flix" element={<SearchFlix />}/>
        <Route path="/tv/:id" element={<FlixPageTV />}/>
        <Route path="/movie/:id" element={<FlixPageMovie />}/>
        <Route path="/:id" element={<InfoPage />} />
        <Route path="/video/:id" element={<EpisodePage />} />
        
      </Routes>
    </div>
  )
}

export default App
