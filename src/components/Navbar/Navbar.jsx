import React, { useState } from "react";
import images from "../../constants/images";
import "./Navbar.css";

//react icons..
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      {/* image container */}
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="site-logo" />
      </div>
      {/* list of links + hover handling */}
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">home</a>
        </li>
        <li className="p__opensans">
          <a href="#pages">pages</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">contact us</a>
        </li>
        <li className="p__opensans">
          <a href="#blog">blog</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div /> {/* to leave some space */}
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggle(true);
          }}
        />
        {/* this div will be shown after toggle */}
        {toggle && (
          <div className="app_navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">home</a>
              </li>
              <li className="p__opensans">
                <a href="#pages">pages</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">contact us</a>
              </li>
              <li className="p__opensans">
                <a href="#blog">blog</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="app__navbar-login-menu">
                <a href="#login" className="p__opensans">
                  Log In / Register
                </a>
                <div /> {/* to leave some space */}
                <a href="/" className="p__opensans">
                  Book Table
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
