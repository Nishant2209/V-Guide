import React from "react";
import "./TOM.css";

function TOM() {
  return (
    <div class="typeOfMentors flex flex-col space-y-8 p-10 m-8 border-[0.5px] border-[#E53F19] border-solid text-veryDarkBlue">
      <div class="heading flex flex-col items-center space-y-4 w-full">
        <h3 class="tomheading text-4xl md:text-5xl lg:text-6xl font-extrabold font-primary my-5">
          Type of Mentors
        </h3>
        <p class=" font-bold text-md lg:text-xl md:w-2/6 text-center text-lg font-secondary my-5 leading-9">
          Different type of mentors are available to provide guidance to
          different level of projects.
        </p>
      </div>
      <div class="mentordefination flex flex-col space-y-10 w-full px-6">
        <div
          class="defbox alpha flex flex-col md:flex-row space-y-4 lg:space-y-0 items-center self-start justify-around p-5 md:w-[48%] bg-[#d9d9d912] rounded-lg text-center lg:text-left"
          data-aos="fade-right"
        >
          <img src="./images/alpha-icon 1.png" alt="" class="h-24" />
          <p class="text-md lg:text-lg md:w-3/5 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            labore, modi, numquam tempora ducimus necessitatibus molestiae
            assumenda dicta mollitia voluptatibus ipsam aliquam, et laborum.
          </p>
        </div>
        <div
          class="defbox beta flex flex-col self-end md:flex-row space-y-4 lg:space-y-0 items-center justify-around p-5 md:w-[48%] bg-[#d9d9d912] rounded-lg text-center lg:text-left"
          data-aos="fade-left"
        >
          <img src="./images/alpha-icon 1.png" alt="" class="h-24" />
          <p class="text-md lg:text-lg md:w-3/5 font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus doloribus, architecto numquam nobis eveniet
            reprehenderit cum dicta nostrum neque? Quas ipsam dignissimos magnam
            repellat.
          </p>
        </div>
        <div
          class="defbox gama flex flex-col md:flex-row space-y-4 lg:space-y-0 items-center justify-around p-5 md:w-[48%] bg-[#d9d9d912] rounded-lg text-center lg:text-left"
          data-aos="fade-right"
        >
          <img src="./images/alpha-icon 1.png" alt="" class="h-24" />
          <p class="text-md lg:text-lg md:w-3/5 font-semibold">
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
