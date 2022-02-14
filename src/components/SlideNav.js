import { Link } from 'react-router-dom'

const Dot = ({ routes, active, i }) => {
  return (
    <Link to={routes[i]}>
      <div
        className={`min-h-[1rem] min-w-[1rem] cursor-pointer rounded-full border-2 border-solid transition-[border-color] duration-300 ${
          parseInt(active) - 1 === i
            ? 'border-black bg-black'
            : 'border-gray-300 bg-gray-300 hover:border-black'
        }`}
      ></div>
    </Link>
  )
}

const SlideNav = ({ slides, active, routes }) => {
  return (
    <div className="absolute bottom-0 left-1/2 z-10 flex w-full max-w-4xl -translate-x-1/2 px-6 lg:bottom-16 lg:px-16">
      {[...Array(parseInt(slides))].map((_, i) => {
        return i < parseInt(slides) - 1 ? (
          <div key={i} className="flex flex-1 items-center">
            <Dot active={active} routes={routes} i={i} />
            <div className="h-0.5 w-full bg-gray-300"></div>
          </div>
        ) : (
          <div key={i} className="flex items-center">
            <Dot active={active} routes={routes} i={i} />
          </div>
        )
      })}
    </div>
  )
}

export default SlideNav
