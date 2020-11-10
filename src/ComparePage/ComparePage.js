import React, { useState, useEffect } from 'react'
import { getComparisonData } from '../apiCalls.js'
import PropTypes from 'prop-types'
import './ComparePage.css'

const ComparePage = ({compareList}) => {
  const [comparisonData, setComparisonData] = useState({citiesToCompare: []})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const citiesToCompare = await getComparisonData(compareList)
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
    <article className="ComparePage">
      <h2>Compare Cities</h2>
      <section className="compare-section">
        {comparisonData.length && comparisonData.map((city, i) => (
          <article class="city-stats">
            <h3>{compareList[i]}</h3>
            <p>{city.categories[4].name}: {Math.round(city.categories[4].score_out_of_10 * 10) / 10}</p>
            <p>{city.categories[13].name}: {Math.round(city.categories[13].score_out_of_10 * 10) / 10}</p>
            <p>{city.categories[11].name}: {Math.round(city.categories[11].score_out_of_10 * 10) / 10}</p>
            <p>{city.categories[14].name}: {Math.round(city.categories[14].score_out_of_10 * 10) / 10}</p>
            <p>Egalitarianism: {Math.round(city.categories[14].score_out_of_10 * 10) / 10}</p>
          </article>
        ))}
      </section>
    </article>
  )
}

ComparePage.propTypes = {
  compareList: PropTypes.arrayOf(PropTypes.string)
}
export default ComparePage