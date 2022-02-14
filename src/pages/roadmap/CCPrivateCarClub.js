import GridLayout from '../../layouts/GridLayout'
import useApi from '../../hooks/useApi'
import privateClub from '../../assets/images/roadmap/private.png'

const RoadmapCCPrivateCarClub = () => {
  const { data } = useApi('/roadmap/cc-private-car-club')

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
            src={privateClub}
            alt="private"
            className="w-3/4 object-cover object-bottom"
          />
        </div>
      </GridLayout>
    </div>
  )
}

export default RoadmapCCPrivateCarClub
