import { FaChevronDown } from "react-icons/fa6";
import { useState } from 'react'
import './Navbar.css';
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen)
    }

    return (
        <nav className={"navbar"}>
            <div className={"logo"}>EffiWork</div>

            <button className={"hamburger"} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`${"navLinks"} ${isOpen ? 'active' : ''}`}>
                <NavLink to="/" className={"navLink"}>Home</NavLink>
                <NavLink to="/portfolio" className={"navLink"}>Portfolio</NavLink>

                <div className={"dropdown"}>
                    <button
                        className={"dropdownButton"}
                        onClick={toggleServices}
                    >
                       <NavLink className={'navLink'} to={'/product-design'}>Services</NavLink>
                        <FaChevronDown size={12} />
                    </button>
                    <div className={`${"dropdownContent"} ${isServicesOpen ? 'show' : ''}`}>
                        <NavLink to="/Web-Development">Web Development</NavLink>
                        <NavLink to="/Mobile-Apps">Mobile Apps</NavLink>
                        <NavLink to="/UI-UX-Design">UI/UX Design</NavLink>
                    </div>
                </div>

                <NavLink to="/Aboutus" className={"navLink"}>About Us</NavLink>
                <NavLink to="/contactus" className={"navLink"}>Contact Us</NavLink>
            </div>

            <div className="start_button">
                <NavLink to="/startProject" className={"startProject"}>Start A Project</NavLink>
            </div>
        </nav>
    )
}

