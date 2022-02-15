import GridLayout from '../layouts/GridLayout'
import car from '../assets/images/cars/home.png'

const Home = () => {
  return (
    <div>
      <GridLayout section="0">
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={car}
            alt="about car"
            className="w-3/4 object-cover object-bottom"
          />
        </div>
      </GridLayout>
    </div>
  )
}

export default Home
