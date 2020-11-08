import React, { useState, useEffect } from 'react'
import { getComparisonData } from '../apiCalls.js'

const ComparePage = ({compareList}) => {
  const [comparisonData, setComparisonData] = useState({citiesToCompare: [compareList]})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const citiesToCompare = await getComparisonData(compareList)
        console.log(citiesToCompare)
        setComparisonData(citiesToCompare)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [compareList])

  return (
    <>
      <h2>Compare Cities</h2>

    </>
  )
}
export default ComparePage