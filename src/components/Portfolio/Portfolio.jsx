import { projects } from '../../constants/Servicelist';
import TitleBar from '../common/TitleBar/TitleBar';
import HeroSection from '../Homepage/ui/HeroSection/HeroSection';
import PortfolioGrid from '../Homepage/ui/Portfolio/Portfolio';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <div className='Portfolio'>
      <TitleBar title={`Portfolio`} />
      <HeroSection
        subtitle="CASE STUDIES"
        title="Transforming Ideas into Client Success"
        description={`We help businesses create efficient digital products with a human-centered UX and interaction design approach.`}
        showbutton={false}
      />
      <PortfolioGrid data={projects} isTop={true} />
    </div>
  )
}

export default Portfolio