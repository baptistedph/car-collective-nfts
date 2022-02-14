import { useLayoutEffect, useState } from 'react'

const Sidebar2 = ({ title, subtitle, content }) => {
  const [color, setColor] = useState(null)

  useLayoutEffect(() => {
    switch (subtitle) {
      case 'Bronze':
        setColor('text-bronze')
        break
      case 'Silver':
        setColor('text-silver')
        break
      case 'Gold':
        setColor('text-gold')
        break
      case 'Platinum':
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
      <ul className="mt-20 flex flex-col gap-12 text-right font-body text-xl uppercase text-gray-400">
        {content.map((row, i) => {
          return <li key={i}>{row}</li>
        })}
      </ul>
    </aside>
  )
}

export default Sidebar2
