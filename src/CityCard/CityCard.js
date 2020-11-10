import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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
        data-testid={`${name}-link`}
        to={`city/${name}`}
      >
        {name}
      </Link>
    </section>
  )
}

CityCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  selected: PropTypes.bool,
  toggleCompareList: PropTypes.func
}

export default CityCard