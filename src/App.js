import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './view/homeView';
import FrontView from './view/frontView';
import Effort1 from './view/effortPage1';
import Effort2 from './view/effortPage2';
import Effort3 from './view/effortPage3';


function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/main" element={< FrontView/>} />
    <Route path="/domestic-food" element={< Effort1/>} />
    <Route path="/local-food" element={< Effort2/>} />
    <Route path="/seasonal-food" element={< Effort3/>} />
  </Routes>
  );
}

export default App;
