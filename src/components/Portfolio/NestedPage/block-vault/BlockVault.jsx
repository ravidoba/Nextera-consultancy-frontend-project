import TitleBar from '../../../common/TitleBar/TitleBar';
import IndexMenu from '../../ui/IndexMenu/IndexMenu';
import './BlockVault.scss';
import { BlockVaultIndex } from './../../../../constants/portfolio'
import Banner from '../../ui/Banner/Banner';
import FlexList from '../../ui/FlexList/FlexList';
import PortfolioGrid from '../../../Homepage/ui/Portfolio/Portfolio';
import { producttFixedGrid } from '../../../../constants/Servicelist';
import HeroSection from '../../../Homepage/ui/HeroSection/HeroSection';


const BlockVault = () => {
    return (
        <div className='BlockVault'>
            <TitleBar title={`Block Vault`} />
            <IndexMenu data={BlockVaultIndex} />
            <Banner bg={BlockVaultIndex?.bg} />
            <FlexList list={BlockVaultIndex?.flexlist} />
            <HeroSection
                title="More Projects"
                showbutton={false}
            />
            <PortfolioGrid data={producttFixedGrid} isTop={true} />
        </div>
    )
}
export default BlockVault