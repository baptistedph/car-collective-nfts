import GridLayout from '../../layouts/GridLayout'
import useApi from '../../hooks/useApi'
import bg from '../../assets/images/cars/community/2.png'

const Community2 = () => {
  const { data } = useApi('/community/2')

  return (
    <div>
      <div className="absolute -z-10 flex h-full w-full overflow-hidden">
        <img src={bg} alt="bg" className="w-full object-cover" />
      </div>
      <GridLayout section={data?.section} content={data?.content}></GridLayout>
    </div>
  )
}

export default Community2
