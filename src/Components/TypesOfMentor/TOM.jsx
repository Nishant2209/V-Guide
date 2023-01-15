import React from "react";
import "./TOM.css";

function TOM() {
  return (
    <div className="typeOfMentors flex flex-col space-y-8 p-4 md:p-10 m-4 md:m-8 border-[0.5px] border-[#E53F19] border-solid text-veryDarkBlue">
      <div className="heading flex flex-col items-center space-y-4 w-full">
        <h3 className="tomheading text-4xl md:text-5xl lg:text-6xl font-extrabold my-5">
          Type of Mentors
        </h3>
        <p className="font-bold text-md lg:text-xl px-4 md:w-2/3 lg:w-1/3 text-center my-5 leading-9">
          Different type of mentors are available to provide guidance to
          different level of projects.
        </p>
      </div>
      <div className="mentordefination flex flex-col space-y-10 w-full px-6">
        <div
          className="defbox alpha flex flex-col md:flex-row space-y-4 lg:space-y-0 items-center self-start justify-around p-5 md:w-[48%] bg-[#d9d9d912] rounded-lg text-center lg:text-left"
          data-aos="zoom-out-down"
        >
          <img src="./images/alpha-icon.png" alt="" className="h-24" />
          <p className="text-md lg:text-lg md:w-3/5">
            Mentors at Alpha are highly experienced professionals who will
            provide guidance and support for a wide variety of projects
            including start-up ideas, complex websites, and much more.
          </p>
        </div>
        <div
          className="defbox beta flex flex-col self-end md:flex-row space-y-4 lg:space-y-0 items-center justify-around p-5 md:w-[48%] bg-[#d9d9d912] rounded-lg text-center lg:text-left"
          data-aos="zoom-out-down"
        >
          <img src="./images/beta-icon.png" alt="" className="h-28" />
          <p className="text-md lg:text-lg md:w-3/5">
            Beta mentors have a medium level of expertise in their fields and
            can assist you with problems related to your job, work, or skills.
            During the course of your medium-level project, they will be able to
            answer your questions.
          </p>
        </div>
        <div
          className="defbox gama flex flex-col md:flex-row space-y-4 lg:space-y-0 items-center justify-around p-5 md:w-[48%] bg-[#d9d9d912] rounded-lg text-center lg:text-left"
          data-aos="zoom-out-down"
        >
          <img src="./images/gamma-icon.png" alt="" className="h-28" />
          <p className="text-md lg:text-lg md:w-3/5">
            Gamma mentors are your own colleagues and university classmates who
            have acquired a decent understanding of their domain in the past few
            years. You will receive guidance for your low-level projects as well
            as a basic roadmap for your projects from them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TOM;
