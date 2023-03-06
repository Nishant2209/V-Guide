import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  let host = "http://localhost:5000";
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    domain: "",
    gender: "",
    level: "",
    password: "",
    cpassword: "",
  });
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const routeChange1 = () => {
    navigate("/LoginPage");
  };
  const routeChange2 = () => {
    navigate("/");
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (user.password === user.cpassword) {
      const response = await fetch(`${host}/api/auth/signup`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          phone: user.phone,
          type: user.type,
          domain: user.domain,
          gender: user.gender,
          level: user.level,
          password: user.password,
        }),
      });

      const json = await response.json();
      if (json.success) {
        alert("Acount created successfully");
        navigate("/LoginPage");
      } else {
        alert("User Already Exists");
      }
    } else {
      alert("Passwords should be equal");
    }
  };
  return (
    <div
      className="bg-gradient-to-r from-[#a0a6cf] via-white to-[#f1b9b1] font-primary -mt-6 h-[100vh]"
      data-aos="fade-in"
    >
      <div className="font-bold mt-6 flex justify-end">
        <div className="bg-transparent px-5 py-1 mr-4 mt-4 transition-all duration-400 ease-in-out text-base rounded-md border-2 border-veryDarkBlue text-veryDarkBlue">
          <button onClick={routeChange2}>Home</button>
        </div>
      </div>
      <div className="form_box text-xs xl:text-base md:text-sm container m-auto mt-14 flex flex-col items-center justify-center bg-transparent z-20">
        <div className="flex flex-row justify-center">
          <img
            src="images/logo.png"
            alt=""
            className="w-16 md:w-20 rounded-2xl"
          />
        </div>
        <div>
          <form
            className="grid md:grid-cols-2 md:space-x-10 grid-cols-1"
            onSubmit={handleClick}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="block mt-6 pl-2 md:ml-10 w-64 xl:w-80 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
              required
              id="name"
              name="name"
              value={user.name}
              onChange={onChange}
            />
            <input
              type="email"
              placeholder="E-mail"
              className="block mt-6 pl-2 w-64 xl:w-80 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
              required
              id="email"
              name="email"
              value={user.email}
              onChange={onChange}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="block mt-6 pl-2 md:ml-10 w-64 xl:w-80 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
              maxLength="10"
              minLength="10"
              required
              id="phone"
              name="phone"
              value={user.phone}
              onChange={onChange}
            />
            <div className="flex flex-row justify-between">
              <select
                name="gender"
                id="gender"
                value={user.gender}
                onChange={onChange}
                required
                className="block mt-6 pl-2 w-[7rem] xl:w-[9rem] py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
              >
                <option value="" className="text-black">
                  Gender
                </option>
                <option value="Male" className="text-black">
                  Male
                </option>
                <option value="Female" className="text-black">
                  Female
                </option>
                <option value="Transgender" className="text-black">
                  Transgender
                </option>
                <option value="Other" className="text-black">
                  Other
                </option>
              </select>
              <select
                name="type"
                id="type"
                value={user.type}
                onChange={onChange}
                required
                className="block mt-6 pl-2 w-[7rem] xl:w-[9rem] py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
              >
                <option value="" className="text-black">
                  Type
                </option>
                <option value="Student" className="text-black">
                  Student
                </option>
                <option value="Mentor" className="text-black">
                  Mentor
                </option>
              </select>
            </div>
            <select
              name="domain"
              id="domain"
              value={user.type === "Student" ? "" : user.domain}
              onChange={onChange}
              required={user.type === "Student" ? false : true}
              disabled={user.type === "Student" ? true : false}
              className="block mt-6 pl-2 w-64 xl:w-80 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
            >
              <option value="" className="text-black">
                Domain
              </option>
              <option value="Web Development" className="text-black">
                Web Development
              </option>
              <option value="Android Development" className="text-black">
                Android Development
              </option>
              <option value="iOS Development" className="text-black">
                iOS Development
              </option>
              <option value="DSA" className="text-black">
                DSA
              </option>
              <option value="AI/ML" className="text-black">
                AI/ML
              </option>
              <option value="Blockchain" className="text-black">
                Blockchain
              </option>
            </select>
            <select
              name="level"
              id="level"
              value={user.type === "Student" ? "" : user.level}
              onChange={onChange}
              required={user.type === "Student" ? false : true}
              disabled={user.type === "Student" ? true : false}
              className="block mt-6 pl-2 w-64 xl:w-80 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
            >
              <option value="" className="text-black">
                Type of Metor
              </option>
              <option value="Alpha" className="text-black">
                Alpha
              </option>
              <option value="Beta" className="text-black">
                Beta
              </option>
              <option value="Gamma" className="text-black">
                Gamma
              </option>
            </select>
            <input
              type="password"
              placeholder="Password"
              className="block mt-6 pl-2 w-64 xl:w-80 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
              minLength="6"
              required
              id="password"
              name="password"
              value={user.password}
              onChange={onChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="block mt-6 pl-2 w-64 xl:w-80 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
              minLength="6"
              required
              id="cpassword"
              name="cpassword"
              value={user.cpassword}
              onChange={onChange}
            />
            <div className="mt-5 text-veryDarkBlue flex justify-center md:col-span-2">
              <button
                className="hover-underline-animation"
                onClick={routeChange1}
              >
                <center>Already Registered? Sign In</center>
              </button>
            </div>
            <div className="block mx-auto mt-6 text-black text-base md:col-span-2 text-center">
              <button
                className="bg-veryDarkBlue text-skin px-5 py-1 hover:scale-110 transition-all duration-300 ease-in-out font-bold rounded-md hover:bg-transparent hover:text-veryDarkBlue hover:border-veryDarkBlue hover:border-2"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
