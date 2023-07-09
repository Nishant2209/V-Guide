import React from "react";
import Navbar from "../../Components/Navbar_Dash/Navbar";
import Profile from "../../Components/Profile/Profile";
import Footer from "../../Components/Footer/Footer";

const ProfilePage = (props) => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#b4b7cd] via-white to-[#f0d0cb] text-veryDarkBlue">
        <Navbar />
        <Profile showAlert={props.showAlert}/>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
