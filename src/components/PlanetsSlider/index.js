// Write your code here
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
    <div className="planets-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
