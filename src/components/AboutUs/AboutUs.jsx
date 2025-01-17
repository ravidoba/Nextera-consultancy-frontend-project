import { DataList } from '../../constants/List';
import { aboutbento } from '../../constants/Servicelist';
import TitleBar from '../common/TitleBar/TitleBar';
import BentoLayout from '../Homepage/ui/BentoGrid/BentoGrid';
import HeroSection from '../Homepage/ui/HeroSection/HeroSection';
import ProfileGrid from '../Homepage/ui/ProfileGrid/ProfileGrid';
import './AboutUs.scss';
import TableBar from './ui/TableBar/TableBar';
import TabView from './ui/TabView/TabView';

const AboutUs = () => {
  return (
    <div className='AboutUs'>
    <TitleBar title={'About Us'}/>
    <TableBar/>
    <HeroSection
        subtitle="Our Value"
        title="Our Value and Beliefs"
        description={`At NextEra Consultancy, our values shape a culture of innovation and excellence. We are dedicated to delivering disruptive solutions and building meaningful relationships with our clients, employees, rd the broader community`}
        showbutton={false}
      />
      <TabView data={DataList}/>
    <HeroSection
        subtitle="WHY US"
        title="Why We're the Right Choice"
        description={`We craft tailored solutions that align with your goals. With innovation and excellence, we deliver seamless experiences. Your success is our priority.`}
        showbutton={false}
      />
      <BentoLayout data={aboutbento}/>
      {/* <HeroSection
        subtitle="PLATFORM"
        title="Digital Discovery Explore Our Profiles"
        description={`We collaborate with businesses to craft digital products that prioritize user-centered design, seamless interaction, and intuitive experiences, Explore Our Profiles ensuring impactful and measurable success.`}
        showbutton={false}
      />
      <ProfileGrid /> */}
    </div>
  )
}

export default AboutUs