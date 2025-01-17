import './hereosection.scss';
import { MdArrowOutward } from "react-icons/md";

const HeroSection = ({ subtitle, title, description, buttonText ,showbutton =true, col }) => {
  return (
    <div className="hero-section" style={col && {
      flexDirection:"column"
    }}>
      <div className="left">
       {subtitle && <span className="subtitle">
          <span className="line"></span>
          {subtitle}
        </span>}
     {title &&   <h1 className="title">
          {title}
        </h1>}
      </div>
      <div className="right">
       {description && <p className="description">
          {description}
        </p>}
        {showbutton && <ButtonX buttonText={buttonText}/>}
      </div>
    </div>
  );
};

export default HeroSection;


export const ButtonX = ({buttonText})=>{
  return   <button className="btn" >
    {buttonText} <span className='icon_up'><MdArrowOutward size={20}/></span>
  </button>
}