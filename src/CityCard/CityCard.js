import React from 'react'
import defaultScale from '../assets/scale-bw.png'
import colorScale from '../assets/scale-color.png'

const CityCard = ({id, name, toggleCompareList, selected}) => {

  let compareButton = selected ? colorScale : defaultScale

  return (
    <section id={`city-${id}`}>
      <img 
        id={`city-${id}`}
        src={compareButton}
        onClick={() => toggleCompareList(name)}
      />
      <h3>{name}</h3>
    </section>
  )
}

export default CityCard