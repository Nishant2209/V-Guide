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
      windowHeight > 40
        ? setStickyClass("Sticky")
        : setStickyClass("");
    }
  };

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/Dashboard");
  };

  return (
    <React.Fragment>
      <section>
        <nav
          className={`navbar flex justify-center mx-auto p-5 lg:px-10 z-50 px-2 md:px-0 ${stickyClass}`}
        >
          {/* flex  conatiner*/}
          <div className=" flex justify-between w-11/12 py-3 px-8 lg:px-20 items-center rounded-xl z-50 backdrop-blur-xl shadow">
            {/* Logo  */}
            <div className="flex justify-center items-center">
              <div>
                <img
                  src="images/logo.png"
                  alt="V-Guide"
                  className="w-12 md:w-16 rounded-xl md:rounded-2xl shadow-orange"
                />
              </div>
            </div>

            {/* Items */}
            <div className="hidden lg:flex lg:justify-center space-x-6 text-xl">
              <a href="#Hero_Section" className="hover-underline-animation">
                Home
              </a>
              <a href="#Feature_Section" className="hover-underline-animation">
                Feature
              </a>
              <a href="#About_Us" className="hover-underline-animation">
                About
              </a>
              <a href="#Testimonials" className="hover-underline-animation">
                Testimonials
              </a>
              <a href="#Footer" className="hover-underline-animation">
                Contact
              </a>
            </div>

            {/* Buttons */}
            <div className="button hidden lg:block">
              <button
                className="text-lg font-bold transition ease-in-out delay-150 bg-transparent text-veryDarkBlue rounded-xl px-4 py-1 border-2 border-veryDarkBlue"
                onClick={routeChange}
              >
                Dashboard
              </button>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden">
              {" "}
              <button
                className={`hamburg lg:hidden focus:outline-none ${burger_class}`}
                id="menu-btn"
                onClick={Hamburger}
              >
                <span className="hamburg-top" />
                <span className="hamburg-middle" />
                <span className="hamburg-bottom" />
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <div
              id="menu"
              className={`absolute flex-col items-center py-8 mt-20 md:mt-28 space-y-6 font-bold bg-veryDarkBlue left-6 right-6 drop-shadow-md text-skin font-primary rounded-lg ${menu_class}`}
              onClick={Hamburger}
            >
              <a href="#Hero_Section">Home</a>
              <a href="#Feature_Section">Feature</a>
              <a href="#About_Us">About</a>
              <a href="#Testimonials">Testimonials</a>
              <a href="#Footer">Contact</a>
              <button
                className="font-bold transition ease-in-out delay-150 bg-transparent text-skin rounded-xl px-7 py-2 border-2"
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
