import GridLayout from '../../layouts/GridLayout'
import useApi from '../../hooks/useApi'
import image from '../../assets/images/roadmap/automative-occasions.jpg'

const RoadmapAutomativeOccasions = () => {
  const { data } = useApi('/roadmap/automative-occasions')

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
            src={image}
            alt="wallpaper"
            className="w-3/4 object-cover object-bottom"
          />
        </div>
      </GridLayout>
    </div>
  )
}

export default RoadmapAutomativeOccasions
