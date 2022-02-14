import { useState, useLayoutEffect } from 'react'

const Sidebar3 = ({ title, subtitle, content, colours }) => {
  const [color, setColor] = useState(null)

  useLayoutEffect(() => {
    switch (subtitle) {
      case '#CC0997':
        setColor('text-bronze')
        break
      case '#CC0338':
        setColor('text-silver')
        break
      case '#CC0159':
        setColor('text-gold')
        break
      case '#CC0032':
        setColor('text-platinum')
        break
      default:
        break
    }
  }, [subtitle])

  return (
    <aside className="flex flex-col items-end p-8">
      <h2 className="max-w-[250px] text-right font-head text-4xl uppercase text-black">
        {title}
      </h2>
      <h3
        className={`max-w-[250px] text-right font-head text-4xl uppercase ${color}`}
      >
        {subtitle}
      </h3>
      <ul className="mt-20 flex w-full flex-col gap-4 text-right font-body text-base uppercase text-gray-400">
        {Object.entries(content).map((entry, i) => {
          return (
            <li key={i} className="flex justify-between">
              <span>{entry[0]}</span>
              <span>{entry[1]}</span>
            </li>
          )
        })}
      </ul>
      <ul className="mt-16 flex w-full justify-between">
        {colours.map((colour, i) => {
          return (
            <li
              key={i}
              className={`h-14 w-14 rounded-full ${
                colour === '#FFFFFF'
                  ? 'border-2 border-solid border-gray-400'
                  : ''
              }`}
              style={{ backgroundColor: colour }}
            ></li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar3
