import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const host = "http://localhost:4000";
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const routeChange1 = () => {
    navigate("/");
  };
  const routeChange2 = () => {
    navigate("/SignUpPage");
  };
  const onChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: auth.email, password: auth.password }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/Dashboard");
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      className="bg-gradient-to-r from-[#a0a6cf] via-white to-[#f1b9b1] font-primary h-[100vh] -mt-6"
      data-aos="fade-in"
    >
      <div className="font-bold mt-6 flex justify-end">
        <div className="bg-transparent px-5 py-1 mr-4 mt-4 transition-all duration-400 ease-in-out text-base rounded-md border-2 border-veryDarkBlue text-veryDarkBlue">
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
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              className="block mt-8 pl-2 w-64 xl:w-80 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
              required
              id="email"
              name="email"
              value={auth.email}
              onChange={onChange}
              // For Enter key
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
            />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="block mt-8 pl-2 w-64 xl:w-80 py-2 border-veryDarkBlue border-2 bg-transparent text-veryDarkBlue placeholder-veryDarkBlue shadow-xl"
              required
              id="password"
              name="password"
              value={auth.password}
              onChange={onChange}
              // For Enter key
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
            />
            <img
              src={
                passwordVisible ? "images/hidePass.png" : "images/showPass.png"
              }
              className={
                passwordVisible
                  ? "relative left-56 xl:left-[17.9rem] bottom-8 cursor-pointer w-6"
                  : "relative left-56 xl:left-72 bottom-8 cursor-pointer"
              }
              onClick={handlePasswordVisibility}
            ></img>
            <div className="mt-5 flex justify-center">
              <button
                className="hover-underline-animation"
                onClick={routeChange2}
              >
                <center>New User? Register Here</center>
              </button>
            </div>
            <button
              type="submit"
              className="block mx-auto mt-8 bg-veryDarkBlue text-skin px-5 py-1 text-lg hover:scale-110 transition-all duration-400 ease-in-out font-medium rounded-md hover:bg-transparent hover:border-2 hover:border-veryDarkBlue hover:text-veryDarkBlue"
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
