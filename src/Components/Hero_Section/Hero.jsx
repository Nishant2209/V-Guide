import React from "react";
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
    <section className="Hero_Section" id="Hero_Section">
      <div className="flex flex-col-reverse md:flex-row mx-auto pb-20 md:pb-0 items-center md:px-28 md:mt-20">
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
              className="text-lg transition ease-in-out delay-150 bg-white rounded-full px-10 py-3 border-2 hover:bg-transparent hover:border-skin hover:bg-darkblue hover:text-skin md:mt-2 border-darkblue text-darkblue"
            >
              Find Mentor
            </button>
            <button
              className="text-lg transition ease delay-150 bg-darkblue text-white rounded-full px-9 py-3 border-2 hover:bg-white hover:text-darkblue hover:border-darkblue"
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
