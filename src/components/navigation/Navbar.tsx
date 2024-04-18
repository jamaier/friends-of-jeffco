import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './Navbar.styles.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <button className="nav-toggle" onClick={toggleMenu}>Menu</button>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li className="nav-item"><Link to="reasons" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setIsOpen(false)}>Reasons</Link></li>
        <li className="nav-item"><Link to="details" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setIsOpen(false)}>Bond Details</Link></li>
        <li className="nav-item"><Link to="districts" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setIsOpen(false)}>Districts</Link></li>
        <li className="nav-item"><Link to="vote" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setIsOpen(false)}>Vote Information</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
