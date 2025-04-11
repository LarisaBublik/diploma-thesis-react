import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio'; 
import ProjectDetails from './pages/ProjectDetails';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
