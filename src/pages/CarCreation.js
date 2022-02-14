import GridLayout from '../layouts/GridLayout'
import useApi from '../hooks/useApi'
import car from '../assets/images/cars/car-creation.mp4'

const CarCreation = () => {
  const { data } = useApi('/car-creation')

  return (
    <div>
      <GridLayout
        section={data?.section}
        title={data?.title}
        content={data?.content}
      >
        <div className="flex h-full w-full items-center justify-center">
          <video
            autoPlay
            controls
            className="aspect-video w-3/4 object-cover object-bottom"
          >
            <source src={car}></source>
          </video>
        </div>
      </GridLayout>
    </div>
  )
}

export default CarCreation
