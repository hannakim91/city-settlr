import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import defaultScale from '../assets/scale-bw.png'
import colorScale from '../assets/scale-color.png'
import './CityCard.css'
const CityCard = ({id, name, toggleCompareList, selected}) => {

  let addToCompareIcon = selected ? colorScale : defaultScale

  return (
    <section 
      className="CityCard"
      id={`city-${id}`}>
      <img 
        className="scale-icon"
        id={`city-${id}`}
        src={addToCompareIcon}
        alt={`add ${name} to compare list`}
        tabIndex="0"
        onKeyDown={() => toggleCompareList(name)}
        onClick={() => toggleCompareList(name)}
      />
      <Link
        className="details-link"
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