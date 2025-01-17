import TitleBar from '../../../common/TitleBar/TitleBar';
import IndexMenu from '../../ui/IndexMenu/IndexMenu';
import './Trackfusion.scss';
import { TrackfusionList } from '../../../../constants/portfolio'
import Banner from '../../ui/Banner/Banner';
import FlexList from '../../ui/FlexList/FlexList';
import PortfolioGrid from '../../../Homepage/ui/Portfolio/Portfolio';
import { producttFixedGrid } from '../../../../constants/Servicelist';
import HeroSection from '../../../Homepage/ui/HeroSection/HeroSection';


const Trackfusion = () => {
    return (
        <div className='Trackfusion'>
            <TitleBar title={`Track fusion`} />
            <IndexMenu data={TrackfusionList} />
            <Banner bg={TrackfusionList?.bg} />
            <FlexList list={TrackfusionList?.flexlist} />
            <HeroSection
                title="More Projects"
                showbutton={false}
            />
            <PortfolioGrid data={producttFixedGrid} isTop={true} />
        </div>
    )
}
export default Trackfusion