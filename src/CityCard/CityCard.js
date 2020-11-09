import React, { useState } from 'react'
import defaultScale from '../assets/scale-bw.png'
import colorScale from '../assets/scale-color.png'

const CityCard = ({name, addToCompareList}) => {
  const [toggle, setToggle] = useState(false)

  let compareButton = toggle ? colorScale : defaultScale

  const toggleCompare = () => {
    setToggle(!toggle)
    addToCompareList(name)
  }
  return (
    <>
      <img 
        src={compareButton}
        onClick={() => toggleCompare()}
      />
      <h3>{name}</h3>
    </>
  )
}

export default CityCard

//imgs for compare off / compare on
//