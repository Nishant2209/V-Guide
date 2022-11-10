import React from "react";

function Features() {
  return (
    <section className="Feature_Section" id="Feature_Section">
      <div className="py-20 md:pt-28 md:pb-52 bg-white">
        <h2 className="text-center text-5xl md:text-6xl font-bold m-6 pb-10 font-primary leading-[60px]">
          What makes us Different ?
          <hr className="h-1 w-10/12 lg:w-7/12 mx-auto bg-black" />
        </h2>
        <div className="flex flex-col rounded-md space-y-6 max-w-full md:space-x-5 md:justify-center md:flex-row mx-auto p-4 items-center md:px-14">
          <div
            className="w-9/12 md:w-1/5 text-center py-3 px-3 leading-10 rounded bg-lightgreen md:mt-6"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <svg
              className="w-12 h-12 inline-block border-solid border-4 p-2 border-darkblue rounded-3xl"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h2 className="font-primary text-2xl font-bold mt-3">
              Accessible and Friendly Mentors
            </h2>
            <p className="leading-5 p-3">
              Find the mentors in your neighbourhood. Get inspired by the
              journey.
            </p>
          </div>
          <div
            className="w-9/12 md:w-1/5 text-center py-3 px-3 leading-10 rounded bg-lightgreen md:mt-5"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <img className="w-12 mx-auto" src="images/247.png" alt="" />
            <h2 className="font-primary text-2xl font-bold mt-3">
              24/7 Resource Availability.
            </h2>
            <p className="leading-5 p-3">
              Don't worry we will make sure that you have 24/7 resource
              available
            </p>
          </div>
          <div
            className="w-9/12 md:w-1/5 text-center py-3 px-3 leading-10 rounded bg-lightgreen"
            data-aos="zoom-in"
            data-aos-duration="1100"
          >
            <img className="w-12 mx-auto" src="images/flexible.png" alt="" />
            <h2 className="font-primary text-2xl font-bold mt-3">
              Flexible and convenient
            </h2>
            <p className="leading-5 p-3">
              Platform that wants you to reach your dreams no matter where you
              are.
            </p>
          </div>
          <div
            className="w-9/12 md:w-1/5 text-center py-3 px-3 leading-10 rounded bg-lightgreen"
            data-aos="zoom-in"
            data-aos-duration="1400"
          >
            <img
              className="w-12 mx-auto"
              src="images/enhance-network.png"
              alt=""
            />
            <h2 className="font-primary text-2xl font-bold mt-3">
              Enhance your professional network
            </h2>
            <p className="leading-5 p-3">
              Opportunity to rekindle your skills and build a network of trusted
              peers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
