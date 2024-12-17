import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'view/HomeView/homeView';
import FrontView from 'view/FrontView/frontView';
import LocalFood from 'view/EffortForLocalFood/effortForLocalFood.js'
import DomesticFood from 'view/EffortForDomesticFood/effortForDomesticFood.js'
import SeasonalFood from 'view/EffortForSeasonalFood/effortForSeasonalFood.js';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/main" element={< FrontView/>} />
    <Route path="/local-food" element={< LocalFood/>} />
    <Route path="/domestic-food" element={< DomesticFood/>} />
    <Route path="/seasonal-food" element={< SeasonalFood/>} />
  </Routes>
  );
}

export default App;
