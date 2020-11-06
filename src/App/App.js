import logo from '../location.png';
import './App.css';
import Cities from '../Cities/Cities.js';
import { getAllCities } from '../apiCalls.js';
import { useState } from 'react';

const App = () => {
  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Settlr</h1>
      </header>
      <Cities />
    </section>
  );
}

export default App;
