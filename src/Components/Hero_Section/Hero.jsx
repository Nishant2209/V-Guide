import React from "react";
import Navbar from "../Navbar_Land/Navbar";
import { useNavigate } from "react-router-dom";

function Hero() {
  let navigate = useNavigate();
  const routeChange1 = () => {
    navigate("/LoginPage");
  };

  const routeChange2 = () => {
    navigate("/Dashboard");
  };

  return (
    <section
      className="Hero_Section bg-gradient-to-b from-[#b4b7cd] via-white to-[#f0d0cb]"
      id="Hero_Section"
    >
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row mx-auto pb-20 md:pb-0 items-center md:px-28 md:mt-10">
        {/* Left */}
        <div className="content flex flex-col space-y-10 md:w-1/2">
          <h1 className="text-4xl text-center leading-tight font-bold md:text-5xl md:text-left md:leading-tight font-primary">
            Find Your Mentor in one click.
          </h1>
          {/* <span class="font-cursive font-light">Mentor</span> */}
          <p className="text-xl text-center font-semibold leading-8 md:leading-10 md:text-left md:text-lg font-secondary">
            V guide is a Virtual platform for mentors and mentees to
            collobrate,discuss and stay concentrated on their learning and
            growth.
          </p>
          <div className="buttons flex flex-col items-center space-y-2 md:flex-row md:space-x-6">
            <button
              onClick={routeChange2}
              className="text-lg transition ease-in-out delay-150 bg-transparent font-semibold rounded-xl px-10 py-3 border-2 hover:bg-transparent hover:border-skin hover:bg-veryDarkBlue hover:text-skin md:mt-2 border-veryDarkBlue text-veryDarkBlue"
            >
              Find Mentor
            </button>
            <button
              className="text-lg transition ease delay-150 bg-veryDarkBlue text-white rounded-xl px-9 py-3 border-2 hover:bg-transparent font-semibold hover:text-veryDarkBlue hover:border-veryDarkBlue"
              onClick={routeChange1}
            >
              Become Mentor
            </button>
          </div>
        </div>
        <div className="img my-8 md:my-0 md:w-2/3 md:mt-0 flex justify-center md:justify-end">
          <img src="images/vguide.png" alt="" className="px-10 container" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
