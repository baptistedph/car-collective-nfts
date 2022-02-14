import GridLayout from '../../layouts/GridLayout'
import useApi from '../../hooks/useApi'
import special from '../../assets/images/roadmap/special.jpg'

const RoadmapSpecialCommissionsProgram = () => {
  const { data } = useApi('/roadmap/special-commissions-program')

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
            src={special}
            alt="special"
            className="w-3/4 object-cover object-bottom"
          />
        </div>
      </GridLayout>
    </div>
  )
}

export default RoadmapSpecialCommissionsProgram
