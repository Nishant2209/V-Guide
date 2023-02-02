import "./searchItem.css";
import { useState, useContext } from "react";
import mentorsData from "../../mentors.json";
import destinationContext from "../../Context/destinationContext";

const SearchItem = () => {
  const [mentors, setMentors] = useState(mentorsData);
  const contextData = useContext(destinationContext);
  let key = contextData.destination.key;

  let filteredArray = mentors.filter((element) =>
    element[`${key}`].toLowerCase().includes(contextData.destination.s1)
  );

  const handleAvailabilityClick = (element, hide) => {
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
              level: e.level,
              type: e.type,
              showAvailaibility: hide ? false : true,
              availaibility: e.availaibility,
            }
          : e
      )
    );
  };

  //
  return (
    <>
      <div className={`filters ${filteredArray.length ? "block" : "hidden"}`}>
        <div className="flex my-6 justify-around">
          <button
            className={`btn-fill  py-2 px-6 text-orange font-bold rounded-full 
       hover:text-veryDarkBlue transition ease-in-out hover:-translate-y-1 hover:border-[0.5px]
        hover:border-veryDarkBlue  ${
          contextData.destination.s1 === "" ? "active" : "border-0"
        }`}
            onClick={() => {
              contextData.setDestination({
                key: "level",
                s1: "",
              });
            }}
          >
            Show All
          </button>
          <button
            className={`btn-fill  py-2 px-6 text-orange font-bold rounded-full 
       hover:text-veryDarkBlue transition ease-in-out hover:-translate-y-1 hover:border-[0.5px]
        hover:border-veryDarkBlue  ${
          contextData.destination.s1 === "alpha" ? "active" : "border-0"
        }`}
            onClick={() => {
              contextData.setDestination({
                key: "level",
                s1: "alpha",
              });
            }}
          >
            Alpha
          </button>
          <button
            className={`btn-fill  py-2 px-6 text-orange font-bold rounded-full 
       hover:text-veryDarkBlue transition ease-in-out hover:-translate-y-1 hover:border-[0.5px]
        hover:border-veryDarkBlue  ${
          contextData.destination.s1 === "beta" ? "active" : "border-0"
        }`}
            onClick={() => {
              contextData.setDestination({
                key: "level",
                s1: "beta",
              });
            }}
          >
            Beta
          </button>
          <button
            className={`btn-fill  py-2 px-6 text-orange font-bold rounded-full 
       hover:text-veryDarkBlue transition ease-in-out hover:-translate-y-1 hover:border-[0.5px]
        hover:border-veryDarkBlue  ${
          contextData.destination.s1 === "gamma" ? "active" : "border-0"
        }`}
            onClick={() => {
              contextData.setDestination({
                key: "level",
                s1: "gamma",
              });
            }}
          >
            Gamma
          </button>
        </div>
      </div>
      {filteredArray.length ? (
        filteredArray.map((element) => (
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
                <img
                  src={`${element.type}`}
                  alt=""
                  className="w-6 inline-block"
                />
              </span>
            </div>
            <div className="siDetails flex flex-col justify-between md:self-start">
              <div
                className={`siDetailTexts flex flex-col gap-1`}
                onClick={() => handleAvailabilityClick(element)}
              >
                <button className="siCheckButton absolute border-2 py-1 px-4 border-veryDarkBlue rounded-lg font-bold backdrop-blur-xl bg-transparent shadow text-veryDarkBlue text-xs md:text-lg">
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
        ))
      ) : (
        <div className="container flex justify-center">
          <h1 className="mx-auto text-xl flex justify-center flex-col leading-tight font-bold md:text-5xl md:text-left md:leading-tight font-primary">
            <img src="./images/error.png" alt="" />
            <div className="text-orange">Oops!!! Mentor not found</div>
          </h1>
        </div>
      )}
    </>
  );
};
export default SearchItem;
