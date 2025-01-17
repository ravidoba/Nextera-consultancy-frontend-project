import './Footer.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const Navigate  =useNavigate();
  return (
    <div className="container_fooetr">
      <footer className="footer-container">
      <div className="footer-content">
        <div className="intro-section">
          <h2 className="footer-heading">Lets Create remarkable results</h2>
          <p className="footer-description">Unlock your projects potential with our technology expertise</p>
          <button className="cta-button" onClick={()=>Navigate('/startProject')}>
            <Link to={'/startProject'}>Start A Project</Link>
          </button>
        </div>

        <div className="tile">
          <h3 className="footer-subheading">
            <Link to={'/'}>NextEra Consultancy</Link>
          </h3>
        </div>
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-info">
            <div>
              <div className="address-info">
                <p className="address-location">Ahmedabad, India</p>
                <div className="line_footer" />
                <p>4011, 4th Floor, Gulmohar Park </p>
                <p>Mall, Satellite Rd, opposite</p>
                <p>Satellite,</p>
                <p>Ahmedabad, Gujarat 380015</p>
                <p>Email: <a href="mailto:NextEra Consultancy@gmail.com" className="footer-link">NextEra Consultancy@gmail.com</a></p>
              </div>
            </div>
            {/* <div className="address-info">
              <p className="address-location">Surat, India</p>
              <div className="line_footer" />
              <p>3002, Silver Business Point,</p>
              <p>Uttran, Surat, GJ 394105</p>
              <p>Email: <a href="mailto:NextEra Consultancy@gmail.com" className="footer-link">NextEra Consultancy@gmail.com</a></p>
            </div> */}
          </div>

          {/* Services Links */}
          <div className="footer-links">
            <ul>
              <li><Link to={'/product-design'} className="footer-link">Digital Product Design</Link></li>
              <li><Link to={'/mobile-development'} className="footer-link">Mobile Development</Link></li>
              <li><Link to={'/web-development'} className="footer-link">Web Development</Link></li>
              <li><Link to={'/backend-development'} className="footer-link">Backend Development</Link></li>
              <li><Link to={'/ai-development'} className="footer-link">AI Development</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-links">
            <ul>
              <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
              <li><Link to="/Aboutus" className="footer-link">About Us</Link></li>
              <li><Link to="/contactus" className="footer-link">Contact Us</Link></li>
              <li><Link to="/termsandconditions" className="footer-link">Terms and Conditions</Link></li>
              <li><Link to="/PrivacyPolicy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
