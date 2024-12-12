import React, { useState } from "react"; // Import React and useState hook
import { Link } from "react-router-dom"; // Import Link for navigation
import Logo from "/src/assets/logo.svg"; // Import logo image
import "../styles/Header.css"

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
          <li className="list-none inline-block mr-4 justify-start text-black cursor-pointer">
            <Link className="rounded-md p-2.5 text-black hover:bg-black hover:text-white" to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="list-none inline-block mr-4 justify-start text-black cursor-pointer">
            <Link className="rounded-md p-2.5 text-black hover:bg-black hover:text-white" to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="list-none inline-block mr-4 justify-start text-black cursor-pointer">
            <Link className="rounded-md p-2.5 text-black hover:bg-black hover:text-white" to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
 