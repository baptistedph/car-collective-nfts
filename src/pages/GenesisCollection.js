import GridLayout from '../layouts/GridLayout'
import useApi from '../hooks/useApi'
import car from '../assets/images/cars/genesis-collection.png'

const GenesisCollection = () => {
  const { data } = useApi('/genesis-collection')

  return (
    <div>
      <GridLayout
        section={data?.section}
        title={data?.title}
        content={data?.content}
      >
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={car}
            alt="car"
            className="w-full object-cover object-bottom"
          />
        </div>
      </GridLayout>
    </div>
  )
}

export default GenesisCollection
