import GridLayout from '../../layouts/GridLayout'
import useApi from '../../hooks/useApi'
import cars from '../../components/ShowroomArtistSignedImages'

const ShowroomArtistSigned = () => {
  const { data } = useApi('/showroom/artist-signed')

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

export default ShowroomArtistSigned
