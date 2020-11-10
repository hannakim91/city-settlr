import React, { useState, useEffect } from 'react'
import { getSingleCity } from '../apiCalls.js'
import PropTypes from 'prop-types'

const DetailsPage = ({city}) => {
  const [details, setDetails] = useState({})
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const cityInfo = await getSingleCity(city)
        setDetails(cityInfo)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchDetails()
  }, [city])

  if (Object.keys(details).length === 0) {
    return <p>Loading...</p>
  }

  return (
    <>
     <h2>{city}</h2>
     {details.summary && details.summary.replace( /(<([^>]+)>)/ig, '')}
     <h3>Quality of Life</h3>
     <ul>
       {details.categories && details.categories.map(category => <li>{category.name}: {Math.round(category.score_out_of_10 * 10) / 10}</li>)}
     </ul>
    </>
  )
}

DetailsPage.prpoTypes = {
  city: PropTypes.string
}

export default DetailsPage