import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Text Utils" />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<Textform headings="Enter text below: "/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;