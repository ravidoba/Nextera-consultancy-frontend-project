import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import HomePage from './components/Homepage/HomePage';
import ContactUs from './components/ContactUs/ContactUs';
import StartProject from './components/startProject/startProject';
import AboutUs from './components/AboutUs/AboutUs';
import TermsCondition from './components/TermsCondition/TermsCondition';
import Privacypolicy from './components/PrivacyPolicy/Privacypolicy';
import bannerimage from './assets/assets/AI development/Frame 1000011400.png'
import ProductDesign from './components/product-design/ProductDesign';
import MobileDevelopment from './components/MobileDevelopment/MobileDevelopment';
import WebDevelopment from './components/WebDevelopment/WebDevelopment';
import BackendDevlopment from './components/BackendDevlopment/BackendDevlopment';
import AiDevelopment from './components/AiDevelopment/AiDevelopment';
import Portfolio from './components/Portfolio/Portfolio';
import BlockVault from './components/Portfolio/NestedPage/block-vault/BlockVault';
import RenovetaWork from './components/Portfolio/NestedPage/renoveta-works/RenovetaWork';
import FinalShere from './components/Portfolio/NestedPage/final-shere/FinalShere';
import Cryptoedge from './components/Portfolio/NestedPage/cryptoedge/Cryptoedge';
import Trackfusion from './components/Portfolio/NestedPage/track-fusion/Trackfusion';
import ScreenScrae from './components/Portfolio/NestedPage/screen-scrae/ScreenScrae';


const App = () => {

  return (
    <Router>
      <div>
        <Navbar bg={bannerimage} />
        <Routes>
          {/* entry page */}
          <Route path="/" element={<HomePage />} />

          {/*common pages  */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/startProject" element={<StartProject />} />
          <Route path="/Aboutus" element={<AboutUs />} />

          {/* product design pages */}
          <Route path="/product-design" element={<ProductDesign />} />
          <Route path="/mobile-development" element={<MobileDevelopment />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/backend-development" element={<BackendDevlopment />} />
          <Route path="/ai-development" element={<AiDevelopment />} />

          {/* Portfolio nested pages */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/block-vault" element={<BlockVault />} />
          <Route path="/portfolio/renoveta-works" element={<RenovetaWork />} />
          <Route path="/portfolio/final-shere" element={<FinalShere />} />
          <Route path="/portfolio/crypto-edge" element={<Cryptoedge />} />
          <Route path="/portfolio/track-fusion" element={<Trackfusion />} />
          <Route path="/portfolio/screen-scrae" element={<ScreenScrae />} />

          {/* policy page */}
          <Route path="/termsandconditions" element={<TermsCondition />} />
          <Route path="/PrivacyPolicy" element={<Privacypolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;