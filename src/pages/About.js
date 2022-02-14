import GridLayout from '../layouts/GridLayout'
import useApi from '../hooks/useApi'
import car from '../assets/images/cars/about.png'

const About = () => {
  const { data } = useApi('/about')

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

export default About
