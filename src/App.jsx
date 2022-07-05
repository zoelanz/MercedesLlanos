import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import WorkYearContainer from "./components/WorkYearContainer/WorkYearContainer";
import Footer from "./components/Footer/Footer";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<WorkYearContainer />} />
          <Route path="/Work/:year" element={<WorkYearContainer />} />

          {/* <Route path="/gallery/:galleryYear" element={<Gallery />} /> */} 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
