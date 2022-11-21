import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const routeChange1 = () => {
    navigate("/");
  };
  const routeChange2 = () => {
    navigate("/SignUpPage");
  };
  return (
    <div
      className="bg-gradient-to-r from-[#a0a6cf] via-white to-[#f1b9b1] font-primary h-[100vh] -mt-6"
      data-aos="zoom-in"
    >
      <div className="font-bold mt-6 flex justify-end">
        <div className="bg-skin px-5 py-1 mr-4 hover:scale-110 transition-all duration-400 ease-in-out text-lg rounded-full mt-4">
          <button onClick={routeChange1}>Home</button>
        </div>
      </div>
      <div className="form_box container md:w-2/5 xl:w-1/4 my-24 m-auto flex flex-col items-center justify-center bg-transparent z-20">
        <div className="flex flex-row justify-center">
          <img
            src="images/logo.png"
            alt=""
            className="w-16 md:w-20 rounded-2xl"
          />
        </div>
        <div>
          <form action="">
            <input
              type="email"
              placeholder="E-mail"
              className="block mt-8 pl-2 w-64 xl:w-80 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="block mt-8 pl-2 w-64 xl:w-80 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
              required
            />
            <div className="mt-5 flex justify-center">
              <button className="hover-underline-animation" onClick={routeChange2}>
                <center>New User? Register Here</center>
              </button>
            </div>
            <button
              type="submit"
              className="block mx-auto mt-8 bg-skin text-black px-5 py-1 text-lg hover:scale-110 transition-all duration-400 ease-in-out font-bold rounded-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
