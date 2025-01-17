import TitleBar from '../../../common/TitleBar/TitleBar';
import IndexMenu from '../../ui/IndexMenu/IndexMenu';
import './FinalShere.scss';
import { FinalShereList } from '../../../../constants/portfolio'
import Banner from '../../ui/Banner/Banner';
import FlexList from '../../ui/FlexList/FlexList';
import PortfolioGrid from '../../../Homepage/ui/Portfolio/Portfolio';
import { producttFixedGrid } from '../../../../constants/Servicelist';
import HeroSection from '../../../Homepage/ui/HeroSection/HeroSection';


const FinalShere = () => {
    return (
        <div className='FinalShere'>
            <TitleBar title={`Final Shere`} />
            <IndexMenu data={FinalShereList} />
            <Banner bg={FinalShereList?.bg} />
            <FlexList list={FinalShereList?.flexlist} />
            <HeroSection
                title="More Projects"
                showbutton={false}
            />
            <PortfolioGrid data={producttFixedGrid} isTop={true} />
        </div>
    )
}
export default FinalShere