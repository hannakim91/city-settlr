import React, { useState, useEffect } from 'react'
import CityCard from '../CityCard/CityCard'

const Cities = (props) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    if (props.cities.length) {
      setCities(props.cities)
    }
  }, [props.cities])

  const cityCards = cities.map(city => {
    return <CityCard 
      name={city}
    />
  })

  return (
    <>
      <h2>Cities</h2>
      <section>{cityCards}</section>
    </>
  )
}

export default Cities