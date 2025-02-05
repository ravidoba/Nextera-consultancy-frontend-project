import { FaChevronDown } from "react-icons/fa6";
import { useEffect, useState } from 'react'
import './Navbar.scss';
import { NavLink, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import LogoImage from "../../../../public/EFFIWORK-BLACK-LOGO.png";
export default function Navbar({ bg }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const location = useLocation();
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const handleScroll = () => {
        setIsOpen(false);
        setIsServicesOpen(false);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setIsServicesOpen(false);
    }, [location?.pathname, location?.key]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={"navbar"}>
            <div className="logo">
                <NavLink to="/">
                    <img src="/EFFIWORK-BLACK-LOGO.png" alt="Company Logo" className="navbar-logo" />
                    NextEra Consultancy
                </NavLink>
            </div>

            <div className={`${"navLinks"} ${isOpen ? 'active' : ''}`}>
                <NavLink to="/" className={"navLink"}
                    onMouseOver={() => setIsServicesOpen(false)}
                >Home</NavLink>
                <NavLink to="/portfolio" className={"navLink"}
                    onMouseOver={() => setIsServicesOpen(false)}
                >Portfolio</NavLink>

                <div className={"dropdown"}>
                    <button
                        className={"dropdownButton"}
                        onClick={(e) => {
                            e.preventDefault(); // Prevent immediate navigation
                            toggleServices();
                        }}>
                        <span className={'navLink'}>Services</span>
                        <FaChevronDown size={12} />
                    </button>
                </div>

                <NavLink to="/Aboutus" className={"navLink"}
                    onMouseOver={() => setIsServicesOpen(false)}
                >About Us</NavLink>
                <NavLink to="/contactus" className={"navLink"}
                    onMouseOver={() => setIsServicesOpen(false)}
                >Contact Us</NavLink>
            </div>

            <div className="start_button">
                <NavLink to="/startProject" className={"startProject"}
                    onMouseOver={() => setIsServicesOpen(false)}
                >Start A Project</NavLink>
            </div>
            <div className={`${"dropdownContent"} ${isServicesOpen ? 'show' : ''}`}>
                <div className="left" >
                    <NavLink to="/product-design" onClick={() => setIsServicesOpen(false)}>Digital Product Design</NavLink>
                    <NavLink to="/Web-Development" onClick={() => setIsServicesOpen(false)}>Web Development</NavLink>
                    <NavLink to="/mobile-development" onClick={() => setIsServicesOpen(false)}>Mobile Development</NavLink>
                    <NavLink to="/backend-development" onClick={() => setIsServicesOpen(false)}>Backend Development</NavLink>
                    <NavLink to="/ai-development" onClick={() => setIsServicesOpen(false)}>Ai Development</NavLink>

                </div>
                <div className="right">
                    <img src={bg} alt="" />
                </div>

            </div>

            <div className="hamburger">
                <IoMenu size={36} onClick={toggleMenu} />
            </div>
            <SiderBar isSideBarShow={isOpen} HandleCloseSidebar={() => setIsOpen(!isOpen)} setIsServicesOpen={setIsServicesOpen} />
        </nav>
    )
}


const SiderBar = ({ isSideBarShow, HandleCloseSidebar, setIsServicesOpen }) => {
    const [showSubmenu, setshowSubmenu] = useState(false)
    return <>
        <div className={`sidebar ${isSideBarShow ? 'show' : ''}`} >
            <div className="close_Sidebar" onClick={HandleCloseSidebar}>
                <IoClose size={35} />
            </div>
            <ul className="sidebar-menu">
                <li><NavLink onClick={HandleCloseSidebar} to={'/'}>Home</NavLink></li>
                <li><NavLink onClick={HandleCloseSidebar} to={'/portfolio'}>Portfolio</NavLink></li>
                <li>
                    <li onClick={() => setshowSubmenu(!showSubmenu)} className={`service_drop`}>Services <IoChevronDownOutline /></li>
                    <ul className={`submenu ${showSubmenu ? 'show' : ""}`}>
                        <li>
                            <NavLink to="/product-design" onClick={HandleCloseSidebar}>Digital Product Design</NavLink>

                        </li>
                        <li>
                            <NavLink to="/Web-Development" onClick={HandleCloseSidebar}>Web Development</NavLink>

                        </li>
                        <li>
                            <NavLink to="/mobile-development" onClick={HandleCloseSidebar}>Mobile Development</NavLink>

                        </li>
                        <li>
                            <NavLink to="/backend-development" onClick={HandleCloseSidebar}>Backend Development</NavLink>

                        </li>
                        <li>
                            <NavLink to="/ai-development" onClick={HandleCloseSidebar}>Ai Development</NavLink>

                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink onClick={HandleCloseSidebar} to={'/Aboutus'}>About Us</NavLink>
                </li>
                <li>
                    <NavLink onClick={HandleCloseSidebar} to={'/contactus'}>Contact Us</NavLink>
                </li>
            </ul>

        </div>
    </>
}
