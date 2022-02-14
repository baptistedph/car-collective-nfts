import { Link } from 'react-router-dom'

const Sidebar7 = ({ content }) => {
  const next = content[content.length - 1].next
  const previous = content[content.length - 1].previous

  return (
    <aside className="flex h-full flex-col items-end justify-end p-8">
      <p
        dangerouslySetInnerHTML={{
          __html: content[0].replaceAll('\n', '<br />'),
        }}
        className="mt-20 text-right font-body text-base text-gray-200"
      ></p>
      <div className="mt-12 flex flex-col gap-4 text-right font-body text-xl uppercase text-blue-300">
        {next && <Link to={`/community/${next}`}>&gt; NEXT</Link>}
        {previous && <Link to={`/community/${previous}`}>PREVIOUS &lt;</Link>}
      </div>
    </aside>
  )
}
export default Sidebar7
