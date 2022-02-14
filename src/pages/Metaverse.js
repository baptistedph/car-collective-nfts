import GridLayout from '../layouts/GridLayout'
import useApi from '../hooks/useApi'
import showroom1 from '../assets/images/metaverse/showroom1.jpg'
import showroom2 from '../assets/images/metaverse/showroom2.jpg'
import showroom3 from '../assets/images/metaverse/showroom3.jpg'

const MeetTaran = () => {
  const { data } = useApi('/metaverse')

  return (
    <div>
      <GridLayout
        section={data?.section}
        title={data?.title}
        content={data?.content}
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <img
            src={showroom1}
            alt="showroom"
            className="absolute mr-[500px] w-96 object-cover object-bottom "
          />
          <img
            src={showroom2}
            alt="showroom"
            className="absolute mr-20 mb-60 w-96 object-cover object-bottom"
          />
          <img
            src={showroom3}
            alt="showroom"
            className="absolute ml-80 mt-96 w-[500px] object-cover object-bottom"
          />
        </div>
      </GridLayout>
    </div>
  )
}

export default MeetTaran
