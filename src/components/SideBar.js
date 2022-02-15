import {
  Sidebar1,
  Sidebar2,
  Sidebar3,
  Sidebar4,
  Sidebar5,
  Sidebar6,
  Sidebar7,
  Sidebar8,
  SidebarMint,
} from './sidebars/SideBars'

const SideBar = ({ section, title, content, subtitle, colours }) => {
  switch (section) {
    case '0':
      return <SidebarMint />
    case '1':
      return <Sidebar1 title={title} content={content} />

    case '2':
      return <Sidebar2 title={title} subtitle={subtitle} content={content} />

    case '3':
      return (
        <Sidebar3
          title={title}
          subtitle={subtitle}
          content={content}
          colours={colours}
        />
      )

    case '4':
      return <Sidebar4 title={title} subtitle={subtitle} content={content} />

    case '5':
      return <Sidebar5 title={title} />

    case '6':
      return <Sidebar6 title={title} subtitle={subtitle} content={content} />

    case '7':
      return <Sidebar7 content={content} />

    case '8':
      return <Sidebar8 title={title} content={content} />

    default:
      return <span>Loading...</span>
  }
}

export default SideBar
