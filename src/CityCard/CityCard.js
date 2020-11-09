import React from 'react'
import { Link } from 'react-router-dom'
import defaultScale from '../assets/scale-bw.png'
import colorScale from '../assets/scale-color.png'

const CityCard = ({id, name, toggleCompareList, selected}) => {

  let addToCompareIcon = selected ? colorScale : defaultScale

  return (
    <section id={`city-${id}`}>
      <img 
        id={`city-${id}`}
        src={addToCompareIcon}
        alt={`add ${name} to compare list`}
        onClick={() => toggleCompareList(name)}
      />
      <Link
        to={`city/${name}`}
      >
        {name}
      </Link>
    </section>
  )
}

export default CityCard