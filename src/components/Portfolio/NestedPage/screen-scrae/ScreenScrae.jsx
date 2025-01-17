import TitleBar from '../../../common/TitleBar/TitleBar';
import IndexMenu from '../../ui/IndexMenu/IndexMenu';
import './ScreenScrae.scss';
import { ScreenScraeList } from '../../../../constants/portfolio'
import Banner from '../../ui/Banner/Banner';
import FlexList from '../../ui/FlexList/FlexList';
import PortfolioGrid from '../../../Homepage/ui/Portfolio/Portfolio';
import { producttFixedGrid } from '../../../../constants/Servicelist';
import HeroSection from '../../../Homepage/ui/HeroSection/HeroSection';


const ScreenScrae = () => {
    return (
        <div className='ScreenScrae'>
            <TitleBar title={`Screen Scrae`} />
            <IndexMenu data={ScreenScraeList} />
            <Banner bg={ScreenScraeList?.bg} />
            <FlexList list={ScreenScraeList?.flexlist} />
            <HeroSection
                title="More Projects"
                showbutton={false}
            />
            <PortfolioGrid data={producttFixedGrid} isTop={true} />
        </div>
    )
}
export default ScreenScrae;