import { PrdouctDesign, steps } from '../../constants/List';
import { Productfeatures, ProductIcons, producttFixedGrid } from '../../constants/Servicelist';
import TitleBar from '../common/TitleBar/TitleBar';
import BentoLayout from '../Homepage/ui/BentoGrid/BentoGrid';
import HeroSection from '../Homepage/ui/HeroSection/HeroSection';
import LogoGrid from '../Homepage/ui/LogoGrid/LogoGrid';
import PortfolioGrid from '../Homepage/ui/Portfolio/Portfolio';
import './ProductDesign.scss';
import ApproachGrid from './ui/GridView/GridView';
import TabView from './ui/TabView/TabView';

const ProductDesign = () => {
  return (
    <div className='ProductDesign'>
      <TitleBar title={'Product Design'} />
      <HeroSection
        subtitle="DESIGN PROCESS"
        title="Our Approach"
        description={`At NextEra Consultancy, we blend strategy, creativity, and technology to craft tailored solutions. Our user-focused approach ensures every project delivers impactful and seamless experiences.`}
        showbutton={false}
      />
      <ApproachGrid steps={steps} />
      <HeroSection
        subtitle="SERVICES"
        title="Design Solutions for Every Need"
        description={`NextEra Consultancy offers comprehensive design services, blending creativity with usability. We work closely with clients to craft designs that elevate their brand while providing exceptional user experiences.`}
        showbutton={false}
      />
      <TabView data={PrdouctDesign} />
      <HeroSection
        subtitle="TECHNOLOGY"
        title="Empowering Business with Technology"
        description={`Leverage cutting-edge technology to drive business growth, streamline operations, and enhance user experiences. Our expert team delivers tailored solutions that empower your brand to thrive in the digital world.`}
        showbutton={false}
      />
      <LogoGrid icons={ProductIcons} />
      <HeroSection
        subtitle="Why Us"
        title="Why We’re the Right Choice"
        description={`We craft tailored solutions that align with your goals. With innovation and excellence, we deliver seamless experiences. Your success is our priority.`}
        showbutton={false}
      />
      <BentoLayout data={Productfeatures} />
      <HeroSection
        title="More Projects"
        showbutton={false}
      />
      <PortfolioGrid data={producttFixedGrid} isTop={true} />
    </div>
  )
}

export default ProductDesign