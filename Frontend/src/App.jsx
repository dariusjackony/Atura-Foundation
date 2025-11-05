import Navbar from "./Components/Navbar";
import VideoCard from "./Components/VideoCard";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import ShortFilms from "./Pages/ShortFilms";
import Latest from "./Pages/Latest";
import Documentary from "./Pages/Documentary";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
function App() {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/Latest" element={<Latest />}/>
      <Route path="/Documentary" element={<Documentary />}/>
      <Route path="/Gallery" element={<Gallery />}/>
      <Route path="/" element={<ShortFilms />}/>
      <Route path="/About" element={<About />}/>
    </Routes>
    
    <Footer />
    </>
  )
}

export default App;
