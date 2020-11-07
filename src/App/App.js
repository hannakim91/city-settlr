import logo from '../location.png';
import './App.css';
import Cities from '../Cities/Cities.js';
import { getAllCities } from '../apiCalls.js';
import { useState, useEffect } from 'react';

const App = () => {
  const [cities, setCities] = useState({ cities: [] })

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCities()
      const cityList = result._links['ua:item'].map(city => city.name)
      setCities(cityList)
    }
    fetchData()
  }, [])

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
