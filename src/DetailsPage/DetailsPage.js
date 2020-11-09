import React, { useState, useEffect } from 'react'
import { getSingleCity } from '../apiCalls.js'

const DetailsPage = ({city}) => {
  const [details, setDetails] = useState({})
  return (
    <>
     <h2>{city}</h2>
    </>
  )
}
export default DetailsPage