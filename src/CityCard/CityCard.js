import React from 'react'
import defaultScale from '../assets/scale-bw.png'
import colorScale from '../assets/scale-color.png'

const CityCard = ({id, name, toggleCompareList, selected}) => {

  let addToCompareIcon = selected ? colorScale : defaultScale

  return (
    <section id={`city-${id}`}>
      <img 
        id={`city-${id}`}
        src={addToCompareIcon}
        alt="add to compare list"
        onClick={() => toggleCompareList(name)}
      />
      <h3>{name}</h3>
    </section>
  )
}

export default CityCard