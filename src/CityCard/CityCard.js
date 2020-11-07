import compareBW from '../assets/scale-bw.png'
import scaleColor from '../assets/scale-color.png'

const CityCard = ({name, addToCompareList}) => {
  return (
    <>
      <img 
        src={compareBW}
        onClick={() => addToCompareList(name)}
      />
      <h3>{name}</h3>
    </>
  )
}

export default CityCard

//imgs for compare off / compare on
//