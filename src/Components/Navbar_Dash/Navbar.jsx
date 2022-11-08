import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const routeChange1 = () => {
    navigate("/LoginPage");
  };

  const routeChange2 = () => {
    navigate("/SignUpPage");
  };

  return (
    <div className="navbar flex justify-center bg-transparent py-5 sticky top-0">
      <div className="navContainer bg-[rgba(255, 255, 255, 0.27)] backdrop-blur-xl flex justify-between w-3/4 py-3 px-16 items-center rounded-lg text-darkBlue shadow">
        <div className="text-veryDarkBlue font-extrabold text-3xl">
          V- Guide
        </div>
        <div>
          <ul className="flex row">
            <li className="mr-10 font-semibold hover-underline-animation">
              Home
            </li>
            <li className="mr-10 font-semibold hover-underline-animation">
              Projects
            </li>
            <li className="font-semibold hover-underline-animation">Mentors</li>
          </ul>
        </div>
        <div className="navItems">
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
  );
};

export default Navbar;
