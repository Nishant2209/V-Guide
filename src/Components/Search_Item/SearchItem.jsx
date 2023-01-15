import "./searchItem.css";
import { useState } from "react";
import mentorsData from "../../mentors.json";

const SearchItem = () => {
  const [mentors, setMentors] = useState(mentorsData);

  const handleAvailabilityClick = (element, hide) => {
    // setAvailaibility("hidden");
    // setSlots("flex");
    setMentors(
      mentors.map((e) =>
        e.id === element.id
          ? {
              id: e.id,
              img: e.img,
              name: e.name,
              branch: e.branch,
              domain: e.domain,
              email: e.email,
              type: e.type,
              showAvailaibility: hide ? false : true,
              availaibility: e.availaibility,
            }
          : e
      )
    );
  };

  return mentors.map((element) => {
    return (
      <div
        className="searchItem p-5 rounded-md flex flex-col m-10 md:mb-5 md:mx-0 md:my-0 md:flex-row items-center justify-between border-2 border-veryDarkBlue gap-5 bg-gradient-to-r from-[#b4b7cd] via-white to-[#f0d0cb]"
        data-aos="fade-in"
      >
        <img
          src={`${element.img.source}`}
          alt={`${element.img.alt}`}
          className="siImg w-36 md:w-48 object-cover rounded-lg"
        />
        <div className="siDesc flex flex-col gap-3 self-start">
          <h1 className="siTitle text-3xl font-extrabold text-orange">
            {element.name}
          </h1>
          <span className="siBranch text-md text-veryDarkBlue">
            {element.branch}
          </span>
          <span className="siDomain text-lg text-veryDarkBlue font-extrabold">
            {element.domain}
          </span>
          <span className="siEmail text-sm text-veryDarkBlue font-bold">
            {element.email}
          </span>
          <span className="siType text-veryDarkBlue">
            Type:{" "}
            <img src={`${element.type}`} alt="" className="w-6 inline-block" />
          </span>
        </div>
        <div className="siDetails flex flex-col justify-between md:self-start">
          <div
            className={`siDetailTexts text-right flex flex-col gap-1 transition-all ease-in-out 3000ms`}
            onClick={() => handleAvailabilityClick(element)}
          >
            <button className="siCheckButton absolute border-2 py-1 px-4 border-veryDarkBlue rounded-lg font-bold backdrop-blur-xl bg-transparent shadow text-veryDarkBlue ">
              See availability
            </button>
          </div>
          <div
            className={`text-veryDarkBlue text-base md:text-lg font-semibold border-2 border-veryDarkBlue rounded-lg ${
              element.showAvailaibility ? "flex" : "hidden"
            } px-4 flex-col backdrop-blur-xl bg-transparent shadow pb-5 gap-2`}
          >
            <div
              onClick={() => handleAvailabilityClick(element, true)}
              className="cursor-pointer self-end -mr-2 md:mr-5 mt-2 md:mt-3"
            >
              <img src="./images/cross.png" alt="cross" className="w-8" />
            </div>
            <div>{element.availaibility.Slot_1}</div>
            <div>{element.availaibility.Slot_2}</div>
            <div>{element.availaibility.Slot_3}</div>
          </div>
        </div>
      </div>
    );
  });
};

export default SearchItem;
