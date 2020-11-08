import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import { getAllCities } from '../apiCalls.js';
import Cities from '../Cities/Cities.js';
import ComparePage from '../ComparePage/ComparePage.js';
import logo from '../assets/location.png';
import './App.css';

const App = () => {
  const [cities, setCities] = useState({ cities: [] })
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // const result = await getAllCities()
        // const cityNames = result._links['ua:item'].map(city => city.name)
        const cityNames = ["Aarhus", "Adelaide", "Albuquerque", "Almaty", "Amsterdam", "Anchorage", "Andorra", "Ankara", "Asheville", "Asuncion", "Athens", "Atlanta", "Auckland", "Austin", "Baku", "Bali", "Baltimore", "Bangkok", "Barcelona", "Beijing", "Beirut", "Belfast", "Belgrade", "Belize City", "Bengaluru", "Bergen", "Berlin", "Bern", "Bilbao", "Birmingham", "Birmingham, AL"]
        setCities(cityNames)
      }
      catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
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
      <Route exact path='/compare'>
        <ComparePage />
      </Route>
    </section>
  );
}

export default App;
