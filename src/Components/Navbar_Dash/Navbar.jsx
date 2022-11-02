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
    <div className="navbar">
      <div className="navContainer">
        <h1 className="logo">V- Guide</h1>
        <div className="navItems">
          <button className="navButton" onClick={routeChange2}>
            Register
          </button>
          <button className="navButton" onClick={routeChange1}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
