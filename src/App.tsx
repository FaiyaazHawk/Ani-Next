import React from 'react'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Search from "./Components/Search"
import InfoPage from './Components/InfoPage'
import {Route, Routes} from "react-router-dom"
import './Styles/App.css'

function App() {

  const [id, setId] = React.useState('gintama')
  
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path={`${id}`} element={<InfoPage id={`${id}`} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
