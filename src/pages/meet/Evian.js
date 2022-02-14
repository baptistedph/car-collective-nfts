import GridLayout from '../../layouts/GridLayout'
import useApi from '../../hooks/useApi'
import car from '../../assets/images/cars/meet/evian.png'

const MeetEvian = () => {
  const { data } = useApi('/meet/evian')

  return (
    <div>
      <GridLayout
        section={data?.section}
        title={data?.title}
        subtitle={data?.subtitle}
        content={data?.content}
      >
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={car}
            alt="car"
            className="w-3/4 object-cover object-bottom"
          />
        </div>
      </GridLayout>
    </div>
  )
}

export default MeetEvian
