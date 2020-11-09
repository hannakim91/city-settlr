import React, { useState, useEffect } from 'react'
import { getSingleCity } from '../apiCalls.js'

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
  return (
    <>
     <h2>{city}</h2>
     {details.summary && details.summary.replace( /(<([^>]+)>)/ig, '')}
    </>
  )
}
export default DetailsPage