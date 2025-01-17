import './Banner.scss'
const Banner = ({ imageUrl, text ,desc}) => {
  return (
    <div class="banner_container">
    <div className="hm_banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="banner-overlay">
     <div className="content_banner">
     <h2 className="banner-text">{text}</h2>
     <h2 className="banner-desc">{desc}</h2>
     </div>
      </div>
    </div>
    </div>
  );
}

export default Banner;
