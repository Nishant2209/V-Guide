import React, { useContext, useEffect, useState } from "react";
import destinationContext from "../../Context/destinationContext";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const context = useContext(destinationContext);
  const { user, fetchUser, userAvailability } = context;

  const navigate = useNavigate();

  const [availability, setAvailability] = useState({
    day1: "",
    from1: "",
    to1: "",
    day2: "",
    from2: "",
    to2: "",
    day3: "",
    from3: "",
    to3: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await userAvailability(
      user.id,
      availability.day1,
      availability.from1,
      availability.to1,
      availability.day2,
      availability.from2,
      availability.to2,
      availability.day3,
      availability.from3,
      availability.to3
    );

    alert("Availability Saved");
    navigate("/Dashboard");
  };

  const onChange = (e) => {
    setAvailability({ ...availability, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-[25%] bg-orange items-center flex flex-col gap-y-4">
        <img
          src={
            user.gender === "Male" ? "./images/man.jpg" : "./images/woman.jpg"
          }
          alt="Woman"
          className="w-24 md:w-48 rounded-full mt-8 md:mt-16"
        />
        <div className="text-2xl md:text-3xl font-extrabold text-skin font-primary text-center">
          {user.name}
        </div>
        <div className="text-lg md:text-xl font-bold  border border-orange inline px-3 py-[1px] rounded-lg">
          {user.type}
        </div>
        {user.type === "Mentor" ? (
          <div className="text-left font-[Pacifico] text-lg md:text-xl text-skin">
            {user.level}
          </div>
        ) : (
          ""
        )}
        <div className="text-xl font-bold mb-6 md:mb-0">{user.domain}</div>
      </div>
      <div className="md:w-[75%] flex flex-col gap-y-6 text-lg mx-5 my-4">
        <div className="flex flex-col gap-y-4 text-base">
          <div className="font-bold text-2xl md:text-3xl">Information</div>
          <hr className="bg-veryDarkBlue w-[80%] md:w-96 h-[2px] -mt-2" />
          <div>
            <span className="font-bold">Full Name: </span>
            {user.name}
          </div>
          <div>
            <span className="font-bold">Email: </span> {user.email}
          </div>
          <div>
            <span className="font-bold">Phone: </span>
            {user.phone}
          </div>
          <div>
            <span className="font-bold">Gender: </span>
            {user.gender}
          </div>
        </div>
        {user.type === "Mentor" ? (
          <div className="flex flex-col gap-y-4 w-full">
            <div className="font-bold text-2xl md:text-3xl">
              Enter your Availability
            </div>
            <hr className="bg-veryDarkBlue w-[80%] md:w-96 h-[2.5px] -mt-2" />
            <form
              onSubmit={handleSubmit}
              className="flex md:flex-col flex-wrap flex-row gap-y-8 items-start text-base"
            >
              <div className="flex flex-col md:flex-row flex-wrap items-start w-full md:block">
                <span className="md:mr-3">Slot 1: </span>
                <select
                  name="day1"
                  id="day1"
                  onChange={onChange}
                  value={availability.day1}
                  className="mr-3 md:mt-8 pl-2 w-full md:w-40 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
                >
                  <option value="">Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
                <span className="mr-3">From</span>
                <input
                  type="time"
                  name="from1"
                  id="from1"
                  onChange={onChange}
                  value={availability.from1}
                  className="mr-3 md:mt-8 pl-2 w-full md:w-40 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
                />
                <span className="mr-3">To</span>
                <input
                  type="time"
                  name="to1"
                  id="to1"
                  onChange={onChange}
                  value={availability.to1}
                  className="mr-3 md:mt-8 pl-2 w-full md:w-40 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
                />
              </div>
              <div className="flex flex-col md:flex-row flex-wrap items-start w-full md:block">
                <span className="md:mr-3">Slot 2: </span>
                <select
                  name="day2"
                  id="day2"
                  onChange={onChange}
                  value={availability.day2}
                  className="mr-3 md:mt-8 pl-2 w-full md:w-40 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
                >
                  <option value="">Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
                <span className="mr-3">From</span>
                <input
                  type="time"
                  name="from2"
                  id="from2"
                  onChange={onChange}
                  value={availability.from2}
                  className="mr-3 md:mt-8 pl-2 w-full md:w-40 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
                />
                <span className="mr-3">To</span>
                <input
                  type="time"
                  name="to2"
                  id="to2"
                  onChange={onChange}
                  value={availability.to2}
                  className="mr-3 md:mt-8 pl-2 w-full md:w-40 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
                />
              </div>
              <div className="flex flex-col md:flex-row flex-wrap items-start w-full md:block">
                <span className="md:mr-3">Slot 3: </span>
                <select
                  name="day3"
                  id="day3"
                  onChange={onChange}
                  value={availability.day3}
                  className="mr-3 md:mt-8 pl-2 w-full md:w-40 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
                >
                  <option value="">Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
                <span className="mr-3">From</span>
                <input
                  type="time"
                  name="from3"
                  id="from3"
                  onChange={onChange}
                  value={availability.from3}
                  className="mr-3 md:mt-8 pl-2 w-full md:w-40 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
                />
                <span className="mr-3">To</span>
                <input
                  type="time"
                  name="to3"
                  id="to3"
                  onChange={onChange}
                  value={availability.to3}
                  className="mr-3 md:mt-8 pl-2 w-full md:w-40 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
                />
              </div>
              <button
                type="submit"
                className="md:mt-8 bg-veryDarkBlue text-skin px-5 py-1 text-lg hover:scale-110 transition-all duration-400 ease-in-out font-medium rounded-md hover:bg-transparent hover:border-2 hover:border-veryDarkBlue hover:text-veryDarkBlue"
              >
                Save
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
