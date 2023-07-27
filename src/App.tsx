import Navbar from "./Components/Common/Navbar";
import Home from "./Components/Anime/Home";
import Search from "./Components/Anime/Search";
import SearchFlix from "./Components/Flix/SearchFlix";
import InfoPage from "./Components/Anime/InfoPage";
import FlixPageTV from "./Components/Flix/FlixPageTV";
import FlixPageMovie from "./Components/Flix/FlixPageMovie";
import EpisodePage from "./Components/Anime/EpisodePage";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <Container style={{ background: "#d3d3d3" }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/flix" element={<SearchFlix />} />
          <Route path="/tv/:id" element={<FlixPageTV />} />
          <Route path="/movie/:id" element={<FlixPageMovie />} />
          <Route path="/:id" element={<InfoPage />} />
          <Route path="/video/:id" element={<EpisodePage />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
