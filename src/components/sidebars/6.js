import { Link } from 'react-router-dom'

const Sidebar6 = ({ title, subtitle, content }) => {
  const next = content[content.length - 1].next
  const previous = content[content.length - 1].previous

  return (
    <aside className="flex flex-col items-end p-8">
      <h2 className="max-w-[250px] text-right font-head text-4xl uppercase text-black">
        {title}
      </h2>
      <h3 className="max-w-[250px] text-right font-head text-4xl uppercase text-platinum">
        {subtitle}
      </h3>
      <ul className="mt-20 flex flex-col gap-12 text-right font-body text-xl uppercase text-gray-400">
        {content.map((row, i) => {
          if (i === content.length - 1) {
            return (
              <li key={i} className="mt-12 flex flex-col gap-4 text-blue-300">
                {next && <Link to={`/meet/${next}`}>&gt; NEXT</Link>}
                {previous && (
                  <Link to={`/meet/${previous}`}>PREVIOUS &lt;</Link>
                )}
              </li>
            )
          } else {
            return <li key={i}>{row}</li>
          }
        })}
      </ul>
    </aside>
  )
}

export default Sidebar6
