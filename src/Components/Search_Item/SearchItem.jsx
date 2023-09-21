import "./searchItem.css";
import { useState, useContext, useEffect } from "react";
import destinationContext from "../../Context/destinationContext";

const SearchItem = () => {
  const [mentors, setMentors] = useState([]);
  const contextData = useContext(destinationContext);
  const { destination, setDestination, userAvailability, user } = contextData;
  let key = destination.key;
  const host = "http://localhost:4000";

  //Time Formatter from 24hr to 12hr format
  const timeFormatter = (oldTime) => {
    const timeString = oldTime;
    const time = new Date();
    const [hours, minutes] = timeString.split(":");

    time.setHours(parseInt(hours, 10));
    time.setMinutes(parseInt(minutes, 10));

    const formattedTime = time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return formattedTime;
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    const response = await fetch(`${host}/api/auth/allusers`, {
      method: "GET",
    });

    const json = await response.json();
    setMentors(json);
  };

  const setAvailability = (avail) => {
    userAvailability(user.id, avail);
  };

  let Array = mentors.filter((e) => {
    if (e.type === "Student") {
      return false;
    }
    return true;
  });

  let filteredArray = Array.filter((element) =>
    element[`${key}`]
      ?.toLowerCase()
      .includes(destination.s1.trim().split(/ +/).join(" "))
  );

  const handleAvailabilityClick = (element, hide) => {
    if (!localStorage.getItem("token")) {
      alert("Login to see availability");
    } else {
      setMentors(
        Array.map((e) =>
          e._id === element._id
            ? {
                _id: e._id,
                // img: e.img,
                name: e.name,
                email: e.email,
                phone: e.phone,
                gender: e.gender,
                type: e.type,
                domain: e.domain,
                level: e.level,
                showAvailaibility: hide ? false : true,
                availability: e.availability,
              }
            : e
        )
      );
    }
  };
  return (
    <>
      <div className="filters">
        <div className="flex my-6 justify-around">
          <button
            className={`btn-fill text-xs py-2 px-4 md:px-6 md:text-base text-orange font-bold rounded-lg 
       hover:text-veryDarkBlue transition ease-in-out hover:-translate-y-1 hover:border-[0.5px]
        hover:border-veryDarkBlue  ${
          destination.s1 === "" ? "active" : "border-0"
        }`}
            onClick={() => {
              setDestination({
                key: "level",
                s1: "",
              });
            }}
          >
            Show All
          </button>
          <button
            className={`btn-fill text-xs py-2 px-4 md:px-6 md:text-base text-orange font-bold rounded-lg 
       hover:text-veryDarkBlue transition ease-in-out hover:-translate-y-1 hover:border-[0.5px]
        hover:border-veryDarkBlue  ${
          destination.s1 === "alpha" ? "active" : "border-0"
        }`}
            onClick={() => {
              setDestination({
                key: "level",
                s1: "alpha",
              });
            }}
          >
            Alpha
          </button>
          <button
            className={`btn-fill text-xs py-2 px-4 md:px-6 md:text-base text-orange font-bold rounded-lg 
       hover:text-veryDarkBlue transition ease-in-out hover:-translate-y-1 hover:border-[0.5px]
        hover:border-veryDarkBlue  ${
          destination.s1 === "beta" ? "active" : "border-0"
        }`}
            onClick={() => {
              setDestination({
                key: "level",
                s1: "beta",
              });
            }}
          >
            Beta
          </button>
          <button
            className={`btn-fill text-xs py-2 px-4 md:px-6 md:text-base text-orange font-bold rounded-lg 
       hover:text-veryDarkBlue transition ease-in-out hover:-translate-y-1 hover:border-[0.5px]
        hover:border-veryDarkBlue  ${
          destination.s1 === "gamma" ? "active" : "border-0"
        }`}
            onClick={() => {
              setDestination({
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
            key={element._id}
          >
            <img
              src={`${
                element.gender === "Female"
                  ? "images/woman.jpg"
                  : "images/man.jpg"
              }`}
              alt="Nothing"
              className="siImg w-36 md:w-40 object-cover rounded-full"
            />
            <div className="siDesc flex flex-col gap-3 self-start">
              <h1 className="siTitle text-3xl font-extrabold text-orange">
                {element.name}
              </h1>
              <span className="siBranch text-md text-veryDarkBlue">
                {element.gender}
              </span>
              <span className="siDomain text-lg text-veryDarkBlue font-extrabold">
                {element.domain}
              </span>
              <span className="siEmail text-lg text-orange font-bold font-[Pacifico]">
                {element.level}
              </span>
              <span className="siEmail text-sm text-veryDarkBlue font-bold">
                {element.email}
              </span>
              {/* <span className="siType text-veryDarkBlue">
                Type:{" "}
                <img
                  src={`${element.type}`}
                  alt=""
                  className="w-6 inline-block"
                />
              </span> */}
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
                className={`text-veryDarkBlue text-base md:text-md font-semibold border-2 border-veryDarkBlue rounded-lg ${
                  element.showAvailaibility ? "flex" : "hidden"
                } px-4 flex-col backdrop-blur-xl bg-transparent shadow pb-5 gap-2`}
              >
                <div
                  onClick={() => handleAvailabilityClick(element, true)}
                  className="cursor-pointer self-end -mr-2 md:mr-5 mt-2 md:mt-3"
                >
                  <img src="./images/cross.png" alt="cross" className="w-8" />
                </div>
                {element.availability.day1 === "" &&
                element.availability.day2 === "" &&
                element.availability.day3 === "" ? (
                  <div className="text-center font-bold text-lg">
                    No Availability
                  </div>
                ) : (
                  <div>
                    {element.availability.day1 === "" ? (
                      " "
                    ) : (
                      <div>
                        {element.availability.day1}:{" "}
                        {timeFormatter(element.availability.from1)} -{" "}
                        {timeFormatter(element.availability.to1)}
                      </div>
                    )}
                    {element.availability.day2 === "" ? (
                      " "
                    ) : (
                      <div>
                        {element.availability.day2}:{" "}
                        {timeFormatter(element.availability.from2)} -{" "}
                        {timeFormatter(element.availability.to2)}
                      </div>
                    )}
                    {element.availability.day3 === "" ? (
                      ""
                    ) : (
                      <div>
                        {element.availability.day3}:{" "}
                        {timeFormatter(element.availability.from3)} -{" "}
                        {timeFormatter(element.availability.to3)}
                      </div>
                    )}
                  </div>
                )}
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
