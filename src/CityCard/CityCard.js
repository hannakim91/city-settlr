import React, { useState, useEffect } from 'react'
import defaultScale from '../assets/scale-bw.png'
import colorScale from '../assets/scale-color.png'

const CityCard = ({id, name, toggleCompareList, compareList, selected}) => {
  // console.log(selected)
  // const [toggle, setToggle] = useState(selected)
  
  //toggle only happening on click after going from compare page to main page 
  //is my name in the list? if so - be selected instead of toggle?
  const toggleCompare = () => {
    toggleCompareList(name)
    // compareList.includes(name) ? setToggle(false) : setToggle(true)
  }
  let compareButton = selected ? colorScale : defaultScale
  return (
    <section id={`city-${id}`}>
      <img 
        id={`city-${id}`}
        src={compareButton}
        onClick={() => toggleCompare()}
      />
      <h3>{name}</h3>
    </section>
  )
}

export default CityCard

//imgs for compare off / compare on
//

 // useEffect(() => {
  //   const clickHandler = ( { target } ) => {
  //     console.log('target', target.id)
  //     const container = document.getElementById(`city-${id}`)
  //     console.log(container)
  //     if (container.id === target.id) return;
  //     setToggle(false)
  //   }
  //   document.addEventListener('click', clickHandler)
  //   return () => document.removeEventListener('click', clickHandler)
  // })