import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { getAllCities } from '../apiCalls.js';
import Cities from '../Cities/Cities.js';
import ComparePage from '../ComparePage/ComparePage.js';
import logo from '../assets/location.png';
import './App.css';

const App = () => {
  const [cities, setCities] = useState({ cities: [] })
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [compareList, setCompareList] = useState([])

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

  const addToCompareList = (cityName) => {
    console.log('click')
    setCompareList([...compareList, cityName])
  }

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Settlr</h1>
      </header>
 
      <Switch>
        <Route 
          exact path='/'
          render={() => (
            <section className="App">
              <Cities
                cities={cities}
                addToCompareList={addToCompareList}
              />
            </section>
          )}
        />
        <Route 
            exact path='/compare' 
            render={() => ComparePage}
        />
      </Switch>
    </>
  );
}

export default App;
