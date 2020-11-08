import React, { useState, useEffect } from 'react'
import CityCard from '../CityCard/CityCard'
import { Link } from 'react-router-dom'

const Cities = (props) => {
  const [cities, setCities] = useState([])
  const [compareList, setCompareList] = useState([])

  useEffect(() => {
    if (props.cities.length) {
      setCities(props.cities)
    }
  }, [props.cities])

  const addToCompareList = (cityName) => {
    console.log('click')
    setCompareList([...compareList, cityName])
  }

  const cityCards = cities.map((city, i) => {
    return <CityCard 
      name={city}
      key={i + 1}
      addToCompareList={addToCompareList}
    />
  })

  return (
    <>
      <h2>Cities</h2>
      <Link to="/compare">
        <button type="button">
          Compare!
        </button>
      </Link>
      <section>{cityCards}</section>
    </>
  )
}

export default Cities