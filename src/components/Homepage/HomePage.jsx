import Banner from './ui/Banner/Banner';
import './HomePage.scss'
import PortfolioGrid from './ui/Portfolio/Portfolio';
import Stats from './ui/Stats/Stats';
import HeroSection from './ui/HeroSection/HeroSection';
import ServiceList from './ui/ServiceList/ServiceList';
import LogoGrid from './ui/LogoGrid/LogoGrid';
import ProfileGrid from './ui/ProfileGrid/ProfileGrid';
import { features, icons, projects, services1 } from '../../constants/Servicelist';
import BentoLayout from './ui/BentoGrid/BentoGrid';
import bannerimage from './../../assets/assets/AI development/Frame 1000011400.png'

const HomePage = () => {
  return (
    <div className='HomePage_container'>
      <Banner desc={`Leverage AI-powered solutions to create, refine, and scale with unmatched precision and adaptability.`} text={'Design, Optimize, and Scale with AI-Driven Precision'} imageUrl={bannerimage} />
      <HeroSection
        subtitle="CASE STUDIES"
        title="Transforming Ideas into Client Success"
        description="We help businesses create efficient digital products with a human-centered UX and innovative design approach."
        // buttonText="View All"
        showbutton={false}
      />
      <PortfolioGrid data={projects}  />
      <Stats />
      <HeroSection
        subtitle="SERVICES"
        title="One Platform for all your digital needs"
        description={`We partner with businesses to design efficient digital products, focusing on user-centered UX and interaction design to ensure seamless, intuitive experiences that drive success.`}
        buttonText="View All"
        showbutton={false}
      />
      <ServiceList data={services1} showbtn={true} />
      <HeroSection
        subtitle="Industry Expertise"
        title="Shaping the Future of Key Industries"
        description={`We partner with businesses to design efficient digital products, focusing on user-centered UX and interaction design to ensure seamless, intuitive experiences that drive success.`}
        showbutton={false}
      />
      <LogoGrid icons={icons}  />
      {/* <HeroSection
        subtitle="PLATFORM"
        title="Digital Discovery Explore Our Profiles"
        description={`We collaborate with businesses to craft digital products that prioritize user-centered design, seamless interaction, and intuitive experiences, Explore Our Profiles ensuring impactful and measurable success.`}
        showbutton={false}
      />
      <ProfileGrid /> */}
      <HeroSection
        subtitle="WHY US"
        title="Why We're the Right Choice"
        description={`We craft tailored solutions that align with your goals. With innovation and excellence, we deliver seamless experiences. Your success is our priority.`}
        showbutton={false}
      />
      <BentoLayout data={features} />
    </div>
  )
}

export default HomePage;
