import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EnterSite from './pages/EnterSite'
import Home from './pages/Home'
import About from './pages/About'
import CarCreation from './pages/CarCreation'
import GenesisCollection from './pages/GenesisCollection'
import CategoryBronze from './pages/categories/Bronze'
import CategorySilver from './pages/categories/Silver'
import CategoryGold from './pages/categories/Gold'
import CategoryPlatinum from './pages/categories/Platinum'
import SpecsCC0997 from './pages/specs/CC0997'
import SpecsCC0032 from './pages/specs/CC0032'
import SpecsCC0159 from './pages/specs/CC0159'
import SpecsCC0338 from './pages/specs/CC0338'
import RoadmapAutomotiveOccasions from './pages/roadmap/AutomotiveOccasions'
import RoadmapSpecialCommissionsProgram from './pages/roadmap/SpecialCommissionsProgram'
import RoadmapCCPrivateCarClub from './pages/roadmap/CCPrivateCarClub'
import RoadmapGenerativeCollection from './pages/roadmap/GenerativeCollection'
import RoadmapMetaverse from './pages/roadmap/Metaverse'
import RoadmapDao from './pages/roadmap/Dao'
import ShowroomBronze from './pages/showroom/Bronze'
import ShowroomSilver from './pages/showroom/Silver'
import ShowroomGold from './pages/showroom/Gold'
import ShowroomPlatinum from './pages/showroom/Platinum'
import ShowroomSpecialEditions from './pages/showroom/SpecialEditions'
import ShowroomArtistSigned from './pages/showroom/ArtistSigned'
import MeetAlex from './pages/meet/Alex'
import MeetEvian from './pages/meet/Evian'
import MeetKyle from './pages/meet/Kyle'
import MeetKenny from './pages/meet/Kenny'
import MeetTaran from './pages/meet/Taran'
// import Community1 from './pages/community/1'
// import Community2 from './pages/community/2'
// import Community3 from './pages/community/3'
// import Community4 from './pages/community/4'
import Metaverse from './pages/Metaverse'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnterSite />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/car-creation" element={<CarCreation />} />
        <Route path="/genesis-collection" element={<GenesisCollection />} />
        <Route path="/categories/bronze" element={<CategoryBronze />} />
        <Route path="/categories/silver" element={<CategorySilver />} />
        <Route path="/categories/gold" element={<CategoryGold />} />
        <Route path="/categories/platinum" element={<CategoryPlatinum />} />
        <Route path="/specs/CC0997" element={<SpecsCC0997 />} />
        <Route path="/specs/CC0338" element={<SpecsCC0338 />} />
        <Route path="/specs/CC0159" element={<SpecsCC0159 />} />
        <Route path="/specs/CC0032" element={<SpecsCC0032 />} />
        <Route
          path="/roadmap/automotive-occasions"
          element={<RoadmapAutomotiveOccasions />}
        />
        <Route
          path="/roadmap/special-commissions-program"
          element={<RoadmapSpecialCommissionsProgram />}
        />
        <Route path="/roadmap/dao" element={<RoadmapDao />} />
        <Route path="/roadmap/metaverse" element={<RoadmapMetaverse />} />
        <Route
          path="/roadmap/generative-collection"
          element={<RoadmapGenerativeCollection />}
        />
        <Route
          path="/roadmap/cc-private-car-club"
          element={<RoadmapCCPrivateCarClub />}
        />
        <Route path="/showroom/bronze" element={<ShowroomBronze />} />
        <Route path="/showroom/silver" element={<ShowroomSilver />} />
        <Route path="/showroom/gold" element={<ShowroomGold />} />
        <Route path="/showroom/platinum" element={<ShowroomPlatinum />} />
        <Route
          path="/showroom/artist-signed"
          element={<ShowroomArtistSigned />}
        />
        <Route
          path="/showroom/special-editions"
          element={<ShowroomSpecialEditions />}
        />
        <Route path="/meet/alex" element={<MeetAlex />} />
        <Route path="/meet/taran" element={<MeetTaran />} />
        <Route path="/meet/kenny" element={<MeetKenny />} />
        <Route path="/meet/kyle" element={<MeetKyle />} />
        <Route path="/meet/evian" element={<MeetEvian />} />
        {/* <Route path="/community/1" element={<Community1 />} />
        <Route path="/community/2" element={<Community2 />} />
        <Route path="/community/3" element={<Community3 />} />
        <Route path="/community/4" element={<Community4 />} /> */}
        <Route path="/metaverse" element={<Metaverse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
