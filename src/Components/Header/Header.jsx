import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar_Dash/Navbar";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/mentors", { state: { destination } });
  };

  return (
    <div className="header bg-gradient-to-b from-[#b4b7cd] via-white to-[#f0d0cb] text-veryDarkBlue z-0">
      <Navbar />
      <div className="headerContainer flex flex-col justify-center items-center">
        <p className="headerTitle text-5xl mx-6 md:text-5xl lg:text-7xl my-5 t-shadow text-center">
          Find your <span className="text-orange font-extrabold">Guru</span> !
        </p>
        <p className="headerDesc font-bold text-md lg:text-xl md:w-2/3 lg:w-1/3 text-center my-5 leading-9 px-7">
          Get the guidance from the mentors around you who are accessible and
          friendly.
        </p>
        <div className="headerSearch shadow-class w-1/2 bg-white py-4 px-4 lg:px-8 rounded-lg mt-5 -mb-8 ">
          <div className="headerSearchItem flex flex-row justify-between items-center">
            <input
              type="text"
              placeholder="What's your domain?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="headerIcon border-[3px] p-3 rounded-full border-veryDarkBlue bg-lightGray text-orange cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
      <hr className="bg-gray-600 h-[3px]" />
    </div>
  );
};

export default Header;
