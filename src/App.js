import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mvp from "./Mvp";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/Mvp" element={<Mvp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
