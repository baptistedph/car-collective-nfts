const Sidebar4 = ({ title, subtitle, content }) => {
  return (
    <aside className="flex flex-col items-end p-8">
      <h2 className="max-w-[250px] text-right font-head text-4xl uppercase text-black">
        {title}
      </h2>
      <h3
        className={`max-w-[250px] text-right font-head text-4xl uppercase text-platinum`}
      >
        {subtitle}
      </h3>
      <p
        dangerouslySetInnerHTML={{ __html: content.replaceAll('\n', '<br />') }}
        className="mt-20 text-right font-body text-base text-gray-400"
      ></p>
    </aside>
  )
}

export default Sidebar4
