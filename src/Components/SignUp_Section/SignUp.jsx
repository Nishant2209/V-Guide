import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  const routeChange1 = () => {
    navigate("/");
  };
  const routeChange2 = () => {
    navigate("/LoginPage");
  };
  return (
    <body className="bg-gradient-to-r from-emerald-300 via-darkblue to-darkBlue font-primary -mt-6 h-[100vh]" data-aos="zoom-in">
      <div className="font-bold mt-6 flex justify-end">
        <div className="bg-skin px-5 py-1 mr-4 mt-4 hover:scale-110 transition-all duration-400 ease-in-out text-base rounded-full">
          <button onClick={routeChange1}>Home</button>
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
            action=""
            className="grid md:grid-cols-2 md:space-x-10 grid-cols-1"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="block mt-6 pl-2 md:ml-10 w-64 xl:w-80 py-2 border-skin border-2 bg-transparent text-skin placeholder-skin shadow-xl"
              required
            />
            <input
              type="text"
              placeholder="Roll Number"
              className="block mt-6 pl-2 md:ml-10 w-64 xl:w-80 py-2 border-skin border-2 bg-transparent text-skin placeholder-skin shadow-xl"
              maxlength="14"
              required
            />
            <input
              type="text"
              placeholder="Branch"
              className="block mt-6 pl-2 w-64 xl:w-80 py-2 border-skin border-2 bg-transparent text-skin placeholder-skin shadow-xl"
              required
            />
            <select
              name="option"
              id="option"
              className="block mt-6 pl-2 w-64 xl:w-80 py-2 border-skin border-2 bg-transparent text-skin placeholder-skin shadow-xl"
            >
              <option value="" className="text-black">
                Select your type
              </option>
              <option value="student" className="text-black">
                Student
              </option>
              <option value="mentor" className="text-black">
                Mentor
              </option>
            </select>
            <input
              type="email"
              placeholder="E-mail"
              className="block mt-6 pl-2 w-64 xl:w-80 py-2 border-skin border-2 bg-transparent text-skin placeholder-skin shadow-xl"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="block mt-6 pl-2 w-64 xl:w-80 py-2 border-skin border-2 bg-transparent text-skin placeholder-skin shadow-xl"
              maxlength="10"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="block mt-6 pl-2 w-64 xl:w-80 py-2 border-skin border-2 bg-transparent text-skin placeholder-skin shadow-xl"
              minlength="6"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="block mt-6 pl-2 w-64 xl:w-80 py-2 border-skin border-2 bg-transparent text-skin placeholder-skin shadow-xl"
              minlength="6"
              required
            />
            <div className="mt-5 text-skin flex justify-center md:col-span-2">
              <button
                className="hover-effect"
                onClick={routeChange2}
              >
                <center>Already Registered? Sign In</center>
              </button>
            </div>
            <div className="block mx-auto mt-6 text-black text-base md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-skin px-5 py-1 hover:scale-110 transition-all duration-300 ease-in-out font-bold rounded-full"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default SignUp;
