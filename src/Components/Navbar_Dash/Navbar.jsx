import "./navbar.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("!open");
  const [menu_class, setMenuClass] = useState("hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 40 ? setStickyClass("Sticky") : setStickyClass("");
    }
  };

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

  let navigate = useNavigate();
  const routeChange1 = () => {
    navigate("/LoginPage");
  };

  const routeChange2 = () => {
    navigate("/SignUpPage");
  };

  const routeChange3 = () => {
    navigate("/");
  };

  return (
    <>
      <div
        className={`navbar flex justify-center mx-auto p-5 lg:px-10 z-50 px-2 md:px-0 ${stickyClass}`}
      >
        {/* flex  conatiner*/}
        <div className=" flex justify-between w-11/12 py-3 px-8 lg:px-20 items-center rounded-xl z-50 backdrop-blur-xl shadow">
          {/* Hamburger Menu */}
          <div className="lg:hidden">
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

          <div
            className="text-veryDarkBlue font-extrabold text-2xl lg:text-3xl cursor-pointer"
            onClick={routeChange3}
          >
            V- Guide
          </div>

          <div className="hidden lg:block">
            <ul className="flex row">
              <li className="mr-10 font-semibold hover-underline-animation">
                Home
              </li>
              <li className="mr-10 font-semibold hover-underline-animation">
                Projects
              </li>
              <li className="font-semibold hover-underline-animation">
                Mentors
              </li>
            </ul>
          </div>

          <div className="navItems hidden lg:block">
            <button
              className="navButton border-[1.2px] py-1 px-4 ml-3 border-veryDarkBlue rounded-lg font-bold"
              onClick={routeChange1}
            >
              Login
            </button>
            <button
              className="navButton border-[1.2px] py-1 px-4 ml-3 border-veryDarkBlue rounded-lg font-bold"
              onClick={routeChange2}
            >
              Sign Up
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
            <a href="/">Home</a>
            <a href="/">Projects</a>
            <a href="/">Mentors</a>

            <button
              className="font-bold transition ease-in-out delay-150 bg-transparent text-skin rounded-xl px-7 py-2 border-2"
              onClick={routeChange1}
            >
              Login
            </button>
            <button
              className="font-bold transition ease-in-out delay-150 bg-transparent text-skin rounded-xl px-7 py-2 border-2"
              onClick={routeChange2}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
