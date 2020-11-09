import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import { getAllCities } from '../apiCalls.js';
import Cities from '../Cities/Cities.js';
import ComparePage from '../ComparePage/ComparePage.js';
import logo from '../assets/location.png';
import './App.css';

const App = () => {
  const [cities, setCities] = useState({ cities: [] })
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [compareList, setCompareList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const result = await getAllCities()
        const cityNames = result._links['ua:item'].map(city => city.name)
        setCities(cityNames)
      }
      catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const toggleCompareList = (cityName) => {
    console.log('click')
    if (compareList.length < 3 && !compareList.includes(cityName)) {
      setCompareList([...compareList, cityName])
      setIsError(false)
      setErrorMessage('')
    } else if (compareList.length <= 3 && compareList.includes(cityName)) {
      const i = compareList.indexOf(cityName)
      compareList.splice(i, 1)
      setCompareList([...compareList])
      setIsError(false)
      setErrorMessage('')
    } else if (compareList.length >= 3) {
      setIsError(true)
      setErrorMessage('You can compare up to 3 cities at a time')
    }
  }

  return (
    <>
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link> 
          <h1>Settlr</h1>
      </header>
 
      <Switch>
        <Route 
          exact path='/'
          render={() => (
            <section className="App">
              {isError && errorMessage}
              <Cities
                cities={cities}
                toggleCompareList={toggleCompareList}
                compareList={compareList}
              />
            </section>
          )}
        />
        <Route 
          exact path='/compare' 
          render={() => (
            <ComparePage
              compareList={compareList}
            />
          )}
        />
        <Route 
          path="/city/:name"
        />
      </Switch>
    </>
  );
}

export default App;


      // if (compareList.length >= 3) {
      //   setIsError(true)
      //   setErrorMessage('You can compare up to 3 cities at a time')
      // } else if (compareList.length <= 3 && compareList.includes(cityName)) {
      //   const i = compareList.indexOf(cityName)
      //   compareList.splice(i, 1)
      // } else if (compareList.length < 3 && !compareList.includes(cityName)) {
      //   setCompareList([...compareList, cityName])
      // }