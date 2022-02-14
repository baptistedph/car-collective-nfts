import GridLayout from '../../layouts/GridLayout'
import useApi from '../../hooks/useApi'
import cars from '../../components/ShowroomBronzeImages'

const ShowroomBronze = () => {
  const { data } = useApi('/showroom/bronze')

  return (
    <div>
      <GridLayout section={data?.section} title={data?.title}>
        <div className="mx-auto grid w-4/5 grid-cols-3 overflow-auto">
          {[...Array(15)].map((_, i) => {
            return (
              <img
                key={i}
                src={cars[i + 1]}
                alt="car"
                className="object-cover object-bottom"
              />
            )
          })}
        </div>
      </GridLayout>
    </div>
  )
}

export default ShowroomBronze
