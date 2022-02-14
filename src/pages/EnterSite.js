import cc from '../assets/images/cc.png'
import instagram from '../assets/images/social/instagram.svg'
import twitter from '../assets/images/social/twitter.svg'
import discord from '../assets/images/social/discord.svg'
import { Link } from 'react-router-dom'

const EnterSite = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <img className="w-[500px]" src={cc} alt="car collective icon" />
          <Link
            to="/home"
            className="w-[320px] -translate-y-24 transform bg-black p-2 text-center font-head text-2xl uppercase text-gray-200"
          >
            [ Enter site ]
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 mb-8 flex -translate-x-1/2 transform items-center justify-between gap-6">
        <a
          href="/"
          className="flex h-20 w-20 items-center justify-center rounded-full bg-black p-4"
        >
          <img src={twitter} alt="twitter logo" />
        </a>
        <a
          href="/"
          className="flex h-20 w-20 items-center justify-center rounded-full bg-black p-4"
        >
          <img src={discord} alt="discord logo" />
        </a>
        <a
          href="/"
          className="flex h-20 w-20 items-center justify-center rounded-full bg-black p-4"
        >
          <img src={instagram} alt="instagram logo" />
        </a>
      </div>
    </>
  )
}

export default EnterSite
