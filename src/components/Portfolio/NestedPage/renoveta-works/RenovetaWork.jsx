import TitleBar from '../../../common/TitleBar/TitleBar';
import IndexMenu from '../../ui/IndexMenu/IndexMenu';
import {  RenovetaWorkList } from '../../../../constants/portfolio'
import Banner from '../../ui/Banner/Banner';
import FlexList from '../../ui/FlexList/FlexList';
import PortfolioGrid from '../../../Homepage/ui/Portfolio/Portfolio';
import { producttFixedGrid } from '../../../../constants/Servicelist';
import HeroSection from '../../../Homepage/ui/HeroSection/HeroSection';
import './RenovetaWork.scss';


const RenovetaWork = () => {
    return (
        <div className='RenovetaWork'>
            <TitleBar title={`Renoveta Work`} />
            <IndexMenu data={RenovetaWorkList} />
            <Banner bg={RenovetaWorkList?.bg} />
            <FlexList list={RenovetaWorkList?.flexlist} />
            <HeroSection
                title="More Projects"
                showbutton={false}
            />
            <PortfolioGrid data={producttFixedGrid} isTop={true} />
        </div>
    )
}
export default RenovetaWork