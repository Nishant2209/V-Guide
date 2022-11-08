import "./navbar.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("!open");
  const [menu_class, setMenuClass] = useState("hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

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

  return (
    <>
      <div className="navbar flex justify-center bg-transparent py-5 sticky top-0">
        <div className="navContainer bg-[rgba(255, 255, 255, 0.27)] backdrop-blur-xl flex justify-between w-11/12 lg:w-3/4 py-3 px-8 lg:px-16 items-center rounded-lg text-veryDarkBlue shadow">
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
          <div className="text-veryDarkBlue font-extrabold text-2xl lg:text-3xl">
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
      </div>
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div
          id="menu"
          className={`absolute flex-col items-center py-8 mt-5 font-bold bg-lightGray backdrop-blur-xl left-6 right-6 drop-shadow-md text-skin font-primary rounded-xl ${menu_class}`}
          onClick={Hamburger}
        >
          <ul className="flex flex-col justify-center items-center">
            <li className="font-semibold hover-underline-animation text-xl mb-3">
              Home
            </li>
            <li className="font-semibold hover-underline-animation text-xl mb-3">
              Projects
            </li>
            <li className="font-semibold hover-underline-animation text-xl mb-3">
              Mentors
            </li>
          </ul>
          <button
            className="navButton border-[1.2px] py-1 px-4 border-veryDarkBlue rounded-lg font-bold text-xl mb-3 text-veryDarkBlue"
            onClick={routeChange1}
          >
            Login
          </button>
          <button
            className="navButton border-[1.2px] py-1 px-4 my-0 border-veryDarkBlue rounded-lg font-bold text-xl mb-3 text-veryDarkBlue"
            onClick={routeChange2}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
