import "./navbar.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import destinationContext from "../../Context/destinationContext";
import Spinner from "../Spinner/Spinner";

const Navbar = (props) => {
  const { showAlert } = props;
  const context = useContext(destinationContext);
  const { user, fetchUser, loading } = context;
  const [burger_class, setBurgerClass] = useState("!open");
  const [menu_class, setMenuClass] = useState("hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    fetchUser();
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
    // eslint-disable-next-line
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

  const routeChange4 = () => {
    navigate("/Dashboard");
  };

  const routeChange5 = () => {
    navigate("/MentorsList");
  };
  const routeChange6 = () => {
    navigate("/Profile");
  };
  const routeChange7 = () => {
    navigate("/Appointment");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Dashboard");
    showAlert("Logged Out Successfully", "success");
  };

  const handleClick = () => {
    showAlert("Please Login First", "danger");
  };

  return (
    <>
      <div
        className={`navbar flex justify-center mx-auto p-5 lg:px-10 z-50 px-2 md:px-0 ${stickyClass}`}
      >
        {/* flex  conatiner*/}
        <div className=" flex justify-between w-11/12 py-3 px-4 lg:px-20 items-center rounded-xl z-50 backdrop-blur-xl shadow">
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
            <ul className="flex flex-row">
              <li
                className="mr-10 font-semibold hover-underline-animation"
                onClick={routeChange4}
              >
                Home
              </li>
              {user.type === "Mentor" ? (
                <li
                  className="mr-10 font-semibold hover-underline-animation"
                  onClick={
                    localStorage.getItem("token") ? routeChange7 : handleClick
                  }
                >
                  Appointments
                </li>
              ) : (
                <li
                  className="mr-10 font-semibold hover-underline-animation"
                  onClick={
                    localStorage.getItem("token") ? routeChange5 : handleClick
                  }
                >
                  Mentors
                </li>
              )}

              <li
                className="font-semibold hover-underline-animation"
                onClick={
                  localStorage.getItem("token") ? routeChange6 : handleClick
                }
              >
                Profile
              </li>
            </ul>
          </div>
          {!localStorage.getItem("token") ? (
            <div className="hidden lg:block">
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
          ) : (
            <div className="flex flex-row items-center">
              <div className="userDetails flex flex-col items-center overflow-hidden float-left">
                <FaUserCircle className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8 lg:mr-2" />
                <div className="navItems hidden absolute mt-16 p-5 backdrop-blur-lg bg-veryDarkBlue text-skin rounded-lg text-center font-secondary text-xs lg:text-base right-2">
                  {/* <Spinner /> */}
                  {!loading ? (
                    <div>
                      <p className="text-2xl lg:text-3xl font-extrabold text-orange font-primary mb-2">
                        {user.name}
                      </p>
                      <p className="text-lg lg:text-xl font-medium  border border-orange inline px-3 py-[1px] rounded-lg font-[Pacifico]">
                        {user.type}
                      </p>
                      <div className="flex flex-row gap-x-4 justify-between mt-3">
                        <div>
                          <p className="text-left mb-3">{user.gender}</p>
                          <p className="text-left mb-3">{user.domain}</p>
                          {user.type === "Mentor" ? (
                            <div>
                              <p className="text-left font-[Pacifico] text-lg lg:text-xl text-orange mb-3">
                                {user.level}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div>
                          <p className="text-right mb-3">{user.email}</p>
                          <p className="text-right mb-3">{user.phone}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Spinner />
                  )}
                </div>
              </div>
              <button
                className="hidden lg:block navButton border-[1.2px] py-1 px-3 lg:py-1 lg:px-4 ml-3 border-veryDarkBlue rounded-lg font-extrabold text-sm lg:text-base"
                onClick={handleLogout}
              >
                LogOut
              </button>
            </div>
          )}
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div
            id="menu"
            className={`z-50 absolute flex-col items-center py-8 mt-20 md:mt-28 space-y-6 font-bold bg-veryDarkBlue left-6 right-6 drop-shadow-md text-skin font-primary rounded-lg ${menu_class}`}
            onClick={Hamburger}
          >
            <ul className="flex flex-col space-y-6 items-center">
              <li onClick={routeChange4}>Home</li>
              {user.type === "Mentor" ? (
                <li
                  onClick={
                    localStorage.getItem("token") ? routeChange7 : handleClick
                  }
                >
                  Appointments
                </li>
              ) : (
                <li
                  onClick={
                    localStorage.getItem("token") ? routeChange5 : handleClick
                  }
                >
                  Mentors
                </li>
              )}
              <li
                onClick={
                  localStorage.getItem("token") ? routeChange6 : handleClick
                }
              >
                Profile
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <div className="flex flex-col space-y-6">
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
            ) : (
              <button
                className="font-bold transition ease-in-out delay-150 bg-transparent text-skin rounded-xl px-7 py-2 border-2"
                onClick={handleLogout}
              >
                LogOut
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
