import GridLayout from '../../layouts/GridLayout'
import useApi from '../../hooks/useApi'
import cars from '../../assets/images/roadmap/dao.png'

const RoadmapDao = () => {
  const { data } = useApi('/roadmap/dao')

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
            src={cars}
            alt="cars"
            className="w-3/4 object-cover object-bottom"
          />
        </div>
      </GridLayout>
    </div>
  )
}

export default RoadmapDao
