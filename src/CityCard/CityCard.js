import defaultScale from '../assets/scale-bw.png'
import colorScale from '../assets/scale-color.png'

const CityCard = ({name, addToCompareList}) => {

  // const toggleCompare = compareList.includes(name) 
  // ? defaultScale : colorScale
  return (
    <>
      <img 
        src={defaultScale}
        onClick={() => addToCompareList(name.toLowerCase())}
      />
      <h3>{name}</h3>
    </>
  )
}

export default CityCard

//imgs for compare off / compare on
//