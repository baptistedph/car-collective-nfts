import GridLayout from '../../layouts/GridLayout'
import useApi from '../../hooks/useApi'
import car from '../../assets/images/roadmap/generative-collection.png'

const RoadmapGenerativeCollection = () => {
  const { data } = useApi('/roadmap/generative-collection')

  return (
    <div>
      <GridLayout
        section={data?.section}
        subtitle={data?.subtitle}
        title={data?.title}
        content={data?.content}
        slideId={data?.slideId}
      >
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={car}
            alt="car"
            className="w-3/5 object-cover object-bottom"
          />
        </div>
      </GridLayout>
    </div>
  )
}

export default RoadmapGenerativeCollection
