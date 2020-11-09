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

  // const categoryList = details.categories.map(category => <li>category.name</li>)
  return (
    <>
     <h2>{city}</h2>
     {details.summary && details.summary.replace( /(<([^>]+)>)/ig, '')}
     <ul>
       {details.categories && details.categories.map(category => <li>{category.name}: {Math.round(category.score_out_of_10 * 10) / 10}</li>)}
     </ul>
    </>
  )
}
export default DetailsPage