import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import WorkYearContainer from "./components/WorkYearContainer/WorkYearContainer";
import WorkDetailContainer from "./components/WorkDetailContainer/WorkDetailContainer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category/:year" element={<WorkYearContainer />} />
          <Route
              path="/detail/:detailId"
              element={<WorkDetailContainer />}
            />
             <Route
              path="/about"
              element={<About />}
            />
             <Route
              path="/contact"
              element={<Contact />}
            />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
