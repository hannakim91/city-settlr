import React, { useState, useEffect } from 'react'
import { getComparisonData } from '../apiCalls.js'

const ComparePage = ({compareList}) => {
  const [comparisonData, setComparisonData] = useState({citiesToCompare: []})

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

  if (compareList.length < 2) {
    return <h3>Please select 2 or more cities to compare</h3>
  }

  return (
    <>
      <h2>Compare Cities</h2>
      {comparisonData.length && comparisonData.map((city, i) => (
        <section>
          <h3>{compareList[i]}</h3>
          <p>{city.categories[4].name}: {Math.round(city.categories[4].score_out_of_10 * 10) / 10}</p>
          <p>{city.categories[13].name}: {Math.round(city.categories[13].score_out_of_10 * 10) / 10}</p>
          <p>{city.categories[11].name}: {Math.round(city.categories[11].score_out_of_10 * 10) / 10}</p>
          <p>{city.categories[14].name}: {Math.round(city.categories[14].score_out_of_10 * 10) / 10}</p>
          <p>Egalitarianism: {Math.round(city.categories[14].score_out_of_10 * 10) / 10}</p>
        </section>
      ))}
    </>
  )
}
export default ComparePage