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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            labore, modi, numquam tempora ducimus necessitatibus molestiae
            assumenda dicta mollitia voluptatibus ipsam aliquam, et laborum.
          </p>
        </div>
        <div
          className="defbox beta flex flex-col self-end md:flex-row space-y-4 lg:space-y-0 items-center justify-around p-5 md:w-[48%] bg-[#d9d9d912] rounded-lg text-center lg:text-left"
          data-aos="zoom-out-down"
        >
          <img src="./images/beta-icon.png" alt="" className="h-28" />
          <p className="text-md lg:text-lg md:w-3/5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus doloribus, architecto numquam nobis eveniet
            reprehenderit cum dicta nostrum neque? Quas ipsam dignissimos magnam
            repellat.
          </p>
        </div>
        <div
          className="defbox gama flex flex-col md:flex-row space-y-4 lg:space-y-0 items-center justify-around p-5 md:w-[48%] bg-[#d9d9d912] rounded-lg text-center lg:text-left"
          data-aos="zoom-out-down"
        >
          <img src="./images/gamma-icon.png" alt="" className="h-28" />
          <p className="text-md lg:text-lg md:w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            iste, dolor vel ad, error quaerat reiciendis iusto ex repudiandae
            quia explicabo a aspernatur consequuntur?
          </p>
        </div>
      </div>
    </div>
  );
}

export default TOM;
