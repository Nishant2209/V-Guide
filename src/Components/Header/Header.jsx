import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar_Dash/Navbar";
import React, { useContext, useEffect, useState } from "react";
import destinationContext from "../../Context/destinationContext";

const Header = (props) => {
  const { showAlert } = props;
  const context = useContext(destinationContext);
  const { user, fetchUser } = context;

  useEffect(() => {
    fetchUser();
    setTimeout(() => {
      if (
        user.type === "Mentor" &&
        user.availability.day1 === "" &&
        user.availability.day2 === "" &&
        user.availability.day3 === ""
      ) {
        showAlert("Please Update Your Availability in Profile Page", "info");
      }
    }, 2000);
    clearTimeout();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {}, []);

  const [value, setValue] = useState();

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/MentorsList");
    context.setDestination({
      key: "domain",
      s1: `${value.toLowerCase()}`,
    });
  };

  return (
    <div className="header bg-gradient-to-b from-[#b4b7cd] via-white to-[#f0d0cb] text-veryDarkBlue z-0">
      <Navbar showAlert={showAlert} />
      <div className="headerContainer flex flex-col justify-center items-center">
        <p className="headerTitle text-5xl mx-6 md:text-5xl lg:text-7xl my-5 t-shadow text-center">
          Find your <span className="text-orange font-extrabold">Guru</span> !
        </p>
        <p className="headerDesc font-bold text-md lg:text-xl md:w-2/3 lg:w-1/3 text-center my-5 leading-9 px-7">
          Get the guidance from the mentors around you who are accessible and
          friendly.
        </p>
        <div className="headerSearch shadow-class w-1/2 bg-white py-3 px-4 lg:px-8 rounded-lg mt-5 -mb-8">
          <div className="headerSearchItem flex flex-row justify-between items-center">
            <input
              type="text"
              placeholder="What's your domain?"
              className="headerSearchInput"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              // For Enter key
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (!localStorage.getItem("token")) {
                    showAlert("Please Login First", "danger");
                  } else {
                    if (!value) {
                      showAlert("Please Enter Some Data", "warning");
                    } else if (user.type === "Mentor") {
                      showAlert("Please Login using student Id", "danger");
                    } else {
                      handleSearch();
                    }
                  }
                }
              }}
            />

            <FontAwesomeIcon
              icon={faSearch}
              className="headerIcon border-[3px] p-3 rounded-full border-veryDarkBlue bg-lightGray text-orange cursor-pointer animate-bounce"
              onClick={() => {
                if (!localStorage.getItem("token")) {
                  showAlert("Please Login First", "danger");
                } else {
                  if (!value) {
                    showAlert("Please Enter Some Data", "warning");
                  } else if (user.type === "Mentor") {
                    showAlert("Please Login using student Id", "danger");
                  } else {
                    handleSearch();
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
      <hr className="bg-gray-600 h-[3px]" />
    </div>
  );
};

export default Header;
