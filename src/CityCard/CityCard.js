import React, { useState, useEffect } from 'react'
import defaultScale from '../assets/scale-bw.png'
import colorScale from '../assets/scale-color.png'

const CityCard = ({id, name, toggleCompareList}) => {
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    const clickHandler = ( { target } ) => {
      const container = document.getElementById(`container-${id}`)
      if (container.contains(target)) return;
      setToggle(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  let compareButton = toggle ? colorScale : defaultScale

  const toggleCompare = () => {
    setToggle(!toggle)
    toggleCompareList(name)
  }
  return (
    <section id={`container-${id}`}>
      <img 
        src={compareButton}
        onClick={() => setToggle(!toggle)}
      />
      <h3>{name}</h3>
    </section>
  )
}

export default CityCard

//imgs for compare off / compare on
//