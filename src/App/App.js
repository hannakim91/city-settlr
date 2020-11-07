import React, { useState, useEffect } from 'react';
import { getAllCities } from '../apiCalls.js';
import Cities from '../Cities/Cities.js';
import logo from '../location.png';
import './App.css';

const App = () => {
  const [cities, setCities] = useState({ cities: [] })

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCities()
      const cityNames = result._links['ua:item'].map(city => city.name)
      setCities(cityNames)
    }
    fetchData()
  }, [])

  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Settlr</h1>
      </header>
      <Cities cities={cities}/>
    </section>
  );
}

export default App;
