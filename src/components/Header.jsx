import React, { useState } from "react"; // Import React and useState hook
import { Link } from "react-router-dom"; // Import Link for navigation
import Logo from "/src/assets/logo.svg"; // Import logo image

function Header() {
  // State to track the menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggles the isOpen state between true and false
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false); // Closes the menu by setting isOpen to false
  };

  return (
    <div>
      <nav className="nav-bar">
        <img src={Logo} alt="logo" />
        
        {/* Hamburger Menu */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        {/* Navbar links */}
        <ul className={`nav-link ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
 