import GridLayout from '../../layouts/GridLayout'
import useApi from '../../hooks/useApi'
import car from '../../assets/images/cars/categories/silver.png'

const CategorySilver = () => {
  const { data } = useApi('/categories/silver')

  return (
    <div>
      <GridLayout
        section={data?.section}
        title={data?.title}
        subtitle={data?.subtitle}
        content={data?.content}
        slideId={data?.slideId}
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

export default CategorySilver
