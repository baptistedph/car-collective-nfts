import SideBar from '../components/SideBar'
import logo from '../assets/images/logo.png'
import instagram from '../assets/images/social/instagram.svg'
import twitter from '../assets/images/social/twitter.svg'
import discord from '../assets/images/social/discord.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SlideNav from '../components/SlideNav'

const GridLayout = (props) => {
  const { children, section, slideId } = props

  return (
    <>
      <div className="h-screen grid-cols-[250px,_1fr,_320px] grid-rows-[110px,_1fr] lg:grid xl:grid-cols-[250px,_1fr,_430px]">
        <div className="col-start-1 row-start-1 flex items-center justify-center border-b-2 border-r-2 border-solid border-gray-200 bg-white p-4">
          <Link to="/home">
            <img src={logo} alt="car collective logo" />
          </Link>
        </div>
        <nav className="col-start-2 row-start-1 border-b-2 border-solid border-gray-200 bg-white py-4 font-body text-base uppercase text-black lg:py-0">
          <ul className="flex h-full flex-wrap items-center justify-between gap-4 px-6 lg:justify-around lg:px-0">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/meet/evian">Meet the team</Link>
            </li>
            <li>
              <Link to="/metaverse">Metaverse</Link>
            </li>
          </ul>
        </nav>
        <div className="col-start-3 row-start-1 flex items-center justify-between border-b-2 border-l-2 border-solid border-gray-200 bg-white py-4 px-6 lg:px-16 lg:py-0">
          <a
            href="https://twitter.com/_CarCollective"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black p-3 lg:h-14 lg:w-14"
          >
            <img src={twitter} alt="twitter logo" />
          </a>
          <a
            href="https://discord.gg/carcollective"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black p-3 lg:h-14 lg:w-14"
          >
            <img src={discord} alt="discord logo" />
          </a>
          <a
            href="https://www.instagram.com/_carcollective/"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black p-3 lg:h-14 lg:w-14"
          >
            <img src={instagram} alt="instagram logo" />
          </a>
        </div>
        <aside className="col-start-1 row-start-2 border-r-2 border-solid border-gray-200 bg-white">
          <nav className="h-full px-6 font-body text-base uppercase text-black lg:px-8">
            <ul className="flex h-full flex-col justify-between gap-4 py-6 lg:py-16">
              <li>
                <Link to="/car-creation">Car creation</Link>
              </li>
              <li>
                <Link to="/genesis-collection">Genesis collection</Link>
              </li>
              <li>
                <Link to="/categories/bronze">Categories</Link>
              </li>
              <li>
                <Link to="/specs/CC0997">Car specs</Link>
              </li>
              <li>
                <Link to="/roadmap/automotive-occasions">Road map</Link>
              </li>
              <li>
                <Link to="/showroom/bronze">Showroom</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div
          className={`relative col-start-2 row-start-2 items-center ${
            section === '5' ? 'overflow-auto' : 'overflow-hidden'
          }`}
        >
          <motion.div
            className="h-96 md:h-[450px] lg:h-full"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              y: { type: 'spring', stiffness: 50 },
            }}
          >
            {children}
          </motion.div>
          {section === '2' ? (
            <div>
              <SlideNav
                slides="4"
                active={slideId}
                routes={[
                  '/categories/bronze',
                  '/categories/silver',
                  '/categories/gold',
                  '/categories/platinum',
                ]}
              />
            </div>
          ) : section === '3' ? (
            <div>
              <SlideNav
                slides="4"
                active={slideId}
                routes={[
                  '/specs/CC0997',
                  '/specs/CC0338',
                  '/specs/CC0159',
                  '/specs/CC0032',
                ]}
              />
            </div>
          ) : (
            section === '4' && (
              <div>
                <SlideNav
                  slides="6"
                  active={slideId}
                  routes={[
                    '/roadmap/automotive-occasions',
                    '/roadmap/special-commissions-program',
                    '/roadmap/dao',
                    '/roadmap/metaverse',
                    '/roadmap/generative-collection',
                    '/roadmap/cc-private-car-club',
                  ]}
                />
              </div>
            )
          )}
        </div>

        <div
          className={`col-start-3 row-start-2 overflow-hidden border-l-2 border-solid border-gray-200 ${
            section === '7'
              ? 'bg-opacity-20 bg-gradient-to-l from-black/80 to-gray-50/20'
              : ''
          }`}
        >
          <motion.div
            className="h-full"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              y: { type: 'spring', stiffness: 50 },
            }}
          >
            <SideBar {...props} />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default GridLayout
