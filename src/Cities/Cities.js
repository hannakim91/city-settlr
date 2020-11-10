import React, { useState, useEffect } from 'react'
import CityCard from '../CityCard/CityCard'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Cities.css'

const Cities = (props) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    if (props.cities.length) {
      setCities(props.cities)
    }
  }, [props.cities])

  const cityCards = cities.map((city, i) => {
    return <CityCard 
      name={city}
      key={i + 1}
      id={city}
      toggleCompareList={props.toggleCompareList}
      selected={props.compareList.includes(city) ? true : false}
    />
  })

  if (cities.length === 0 ) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h2>Cities</h2>
      <Link to="/compare">
        <button 
          className="compare-button"
          type="button">
          Compare!
        </button>
      </Link>
      <section className="Cities-container">{cityCards}</section>
    </>
  )
}

Cities.propTypes = {
  compareList: PropTypes.arrayOf(PropTypes.string),
  // cities: PropTypes.array.isRequired
}
export default Cities