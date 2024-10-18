import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import qr_code from '../../assets/qr_code.png'

const DonationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={qr_code} alt="Donation QR Code" className="qr-code" />
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

const Navbar = ({ founderRef }) => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  const openDonationModal = () => {
    setIsModalOpen(true);
    setMobileMenu(false);
  }

  const closeDonationModal = () => {
    setIsModalOpen(false);
  }

  const handleNavItemClick = () => {
    setMobileMenu(false);
  }

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
    setResourcesDropdownOpen(false);
  }

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!resourcesDropdownOpen);
    setAboutDropdownOpen(false);
  }

  const scrollToFounder = () => {
    if (founderRef.current) {
      founderRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav ref={navRef} className={`container ${sticky ? 'dark-nav' : ''}`}>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul className={mobileMenu ? 'mobile-menu-active' : 'hide-mobile-menu'}>
          <li><Link to="/" onClick={handleNavItemClick}>Home</Link></li>
          <li className="dropdown">
            <Link className='dropbtn' to="#" onClick={scrollToFounder}>Focus Area</Link> {/* Updated this line */}
            <div className="dropdown-content">
              <Link to="/focus" onClick={handleNavItemClick}>Digital literacy</Link>
              <Link to="/focus" onClick={handleNavItemClick}>Women Empowerment</Link>
              <Link to="/focus" onClick={handleNavItemClick}>Institutional Building</Link>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn">About Us</button>
            <div className="dropdown-content">
              <Link to="/about" onClick={handleNavItemClick}>Our Organisation</Link>
              <Link to="/focus" onClick={handleNavItemClick}>Our Journey</Link>
              <Link to="#" onClick={scrollToFounder}>Founders</Link> {/* Updated this line */}
              <Link to="/focus-areas" onClick={handleNavItemClick}>Focus Areas</Link>
              <Link to="/focus-areas" onClick={handleNavItemClick}>Focus Areas</Link>
            </div>
          </li>
          <li><Link to="/campus" onClick={handleNavItemClick}>Keyprojects</Link></li>
          <li><Link to="/campus" onClick={handleNavItemClick}>Campus</Link></li>
          <li><Link to="/sonch-in-news" onClick={handleNavItemClick}>Sonch in News</Link></li>
          <li className="dropdown">
           
          </li>
          <li><Link to="/contact" className="btn" onClick={handleNavItemClick}>Contact us</Link></li>
          <li><button onClick={openDonationModal} className="btn donate-btn">Donate</button></li>
        </ul>
        <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
      </nav>
      <DonationModal isOpen={isModalOpen} onClose={closeDonationModal} />
    </>
  )
}

export default Navbar
