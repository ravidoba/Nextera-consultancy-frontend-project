import TitleBar from '../../../common/TitleBar/TitleBar';
import IndexMenu from '../../ui/IndexMenu/IndexMenu';
import './Cryptoedge.scss';
import { CryptoedgeList } from '../../../../constants/portfolio'
import Banner from '../../ui/Banner/Banner';
import FlexList from '../../ui/FlexList/FlexList';
import PortfolioGrid from '../../../Homepage/ui/Portfolio/Portfolio';
import { producttFixedGrid } from '../../../../constants/Servicelist';
import HeroSection from '../../../Homepage/ui/HeroSection/HeroSection';


const Cryptoedge = () => {  
    return (
        <div className='Cryptoedge'>
            <TitleBar title={`Crypto Edge`} />
            <IndexMenu data={CryptoedgeList} />
            <Banner bg={CryptoedgeList?.bg} />
            <FlexList list={CryptoedgeList?.flexlist} />
            <HeroSection
                title="More Projects"
                showbutton={false}
            />
            <PortfolioGrid data={producttFixedGrid} isTop={true} />
        </div>
    )
}
export default Cryptoedge