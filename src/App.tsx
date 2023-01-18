import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Search from "./Components/Search"
import {Route, Routes} from "react-router-dom"
import './Styles/App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
