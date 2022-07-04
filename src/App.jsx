import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Work2022 from "./components/Work2022/Work2022";
import Footer from "./components/Footer/Footer";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work2022" element={<Work2022 />} />
          {/* <Route path="/gallery/:galleryYear" element={<Gallery />} /> */} 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
