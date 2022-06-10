import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Drinks from './pages/drinks';
import DetailDrink from './pages/detailDrink';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Drinks />} />
          <Route path="/detailDrink/:idDrink" element={<DetailDrink />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
