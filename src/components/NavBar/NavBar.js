import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import "./NavBar.css";

function Navbar() {

  const navRef = useRef();
  const [visible, setVisible] = useState(false)

  const navTransition = () => {
    if (window.scrollY > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navTransition);
    return () => window.removeEventListener("scroll", navTransition)
  }, [])

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };

  return (
    <div className={`container ${visible && "nav_black"}`}>
      <FaReact size={40} />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Blog</a>
        <a href="/#">About</a>
        <a href="/#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      {/* Renders a button with the class of nav-btn and an FaBars icon inside */}
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;