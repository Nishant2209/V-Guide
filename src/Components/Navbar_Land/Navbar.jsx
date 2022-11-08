import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [burger_class, setBurgerClass] = useState("!open");
  const [menu_class, setMenuClass] = useState("hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [stickyClass, setStickyClass] = useState("");

  const Hamburger = () => {
    if (!isMenuClicked) {
      setBurgerClass("open");
      setMenuClass("flex");
      setIsMenuClicked(true);
    } else if (isMenuClicked) {
      setBurgerClass("!open");
      setMenuClass("hidden");
      setIsMenuClicked(false);
    } else {
      setBurgerClass("open");
      setMenuClass("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 20 ? setStickyClass("Sticky") : setStickyClass("");
    }
  };

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/Dashboard");
  };

  return (
    <React.Fragment>
      <section className="bg-skin">
        <nav
          className={`navbar relative mx-auto p-5 px-10 md:px-8 bg-darkblue z-10 ${stickyClass}`}
        >
          {/* flex  conatiner*/}
          <div className="Sticky flex flex-row justify-between md:flex-row items-center md:justify-around m-auto">
            {/* Logo  */}
            <div className="flex justify-center items-center">
              <div>
                <img
                  src="images/logo.png"
                  alt="V-Guide"
                  className="w-12 md:w-16 rounded-xl md:rounded-2xl"
                />
              </div>
            </div>
            {/* Items */}
            <div className="hidden md:flex md:justify-center space-x-6 text-xl">
              <a href="#Hero_Section" className="hover-effect">
                Home
              </a>
              <a href="#Feature_Section" className="hover-effect">
                Feature
              </a>
              <a href="#About_Us" className="hover-effect">
                About
              </a>
              <a href="#Testimonials" className="hover-effect">
                Testimonials
              </a>
              <a href="#Footer" className="hover-effect">
                Contact
              </a>
            </div>
            {/* Buttons */}
            <div className="button hidden md:block">
              <button
                className="text-lg font-medium transition ease-in-out delay-150 bg-skin text-darkblue rounded-full px-7 py-2 border-2 hover:bg-transparent hover:border-skin hover:text-skin"
                onClick={routeChange}
              >
                Dashboard
              </button>
            </div>
            {/* Hamburger Menu */}
            <div className="md:hidden">
              {" "}
              <button
                className={`hamburger md:hidden focus:outline-none ${burger_class}`}
                id="menu-btn"
                onClick={Hamburger}
              >
                <span className="hamburger-top" />
                <span className="hamburger-middle" />
                <span className="hamburger-bottom" />
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <div
              id="menu"
              className={`absolute flex-col items-center py-8 mt-20 space-y-6 font-bold bg-darkblue left-6 right-6 drop-shadow-md text-skin font-primary rounded-lg ${menu_class}`}
              onClick={Hamburger}
            >
              <a href="#Hero_Section">Home</a>
              <a href="#Feature_Section">Feature</a>
              <a href="#About_Us">About</a>
              <a href="#Testimonials">Testimonials</a>
              <a href="#Footer">Contact</a>
              <button
                className="font-bold transition ease-in-out delay-150 bg-skin text-darkblue rounded-full px-7 py-2 border-2 hover:bg-transparent hover:border-skin hover:text-skin"
                onClick={routeChange}
              >
                Dashboard
              </button>
            </div>
          </div>
        </nav>
      </section>
    </React.Fragment>
  );
}

export default Navbar;
