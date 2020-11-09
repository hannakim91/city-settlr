import React, { useState, useEffect } from 'react'
import CityCard from '../CityCard/CityCard'
import { Link } from 'react-router-dom'

const Cities = (props) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    if (props.cities.length) {
      setCities(props.cities)
    }
  }, [props.cities])

  // can do the toggle for scale picked here instead
  //show it's been selected (on load, not just onclick)
  //pass down another prop :selected: - have you been selected or not (are you in the comparelist)
  //setToggle useState in cityCard -> determine the useState
  const cityCards = cities.map((city, i) => {
    return <CityCard 
      name={city}
      key={i + 1}
      id={city}
      toggleCompareList={props.toggleCompareList}
      selected={props.compareList.includes(city) ? true : false}
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