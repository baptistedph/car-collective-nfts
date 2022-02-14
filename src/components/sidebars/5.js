import { Link, useLocation } from 'react-router-dom'

const Item = ({ children, to, className }) => {
  const location = useLocation()

  return (
    <li
      className={`${className} origin-right transform transition-[transform] duration-300 ${
        location.pathname === `/showroom/${children.toLowerCase()}`
          ? 'scale-125'
          : 'hover:scale-110'
      }`}
    >
      <Link to={to}>{children}</Link>
    </li>
  )
}

const Sidebar5 = ({ title }) => {
  return (
    <aside className="flex flex-col items-end p-8">
      <h2 className="max-w-[250px] text-right font-head text-4xl uppercase text-black">
        {title}
      </h2>
      <ul className="mt-12 flex flex-col gap-12 text-right font-head text-2xl">
        <Item to="/showroom/bronze" className="text-bronze">
          Bronze
        </Item>
        <Item to="/showroom/silver" className="text-silver">
          Silver
        </Item>
        <Item to="/showroom/gold" className="text-gold">
          Gold
        </Item>
        <Item to="/showroom/platinum" className="text-platinum">
          Platinum
        </Item>
        <Item to="/showroom/artist-signed" className="text-black">
          Artist Signed
        </Item>
        <Item to="/showroom/special-editions" className="text-[#214418]">
          Special Editions
        </Item>
      </ul>
    </aside>
  )
}

export default Sidebar5
