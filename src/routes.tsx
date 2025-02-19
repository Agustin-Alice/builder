import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import  BuilderPage   from './pages/BuilderPage'


const AppRoutes = () => {
  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/builder-demo" element={<BuilderPage />} />
        <Route path="*" element={<BuilderPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;