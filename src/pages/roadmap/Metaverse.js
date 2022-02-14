import GridLayout from '../../layouts/GridLayout'
import useApi from '../../hooks/useApi'
import car from '../../assets/images/roadmap/metaverse.png'

const RoadmapMetaverse = () => {
  const { data } = useApi('/roadmap/metaverse')

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
            alt="about car"
            className="w-3/4 object-cover object-bottom"
          />
        </div>
      </GridLayout>
    </div>
  )
}

export default RoadmapMetaverse
