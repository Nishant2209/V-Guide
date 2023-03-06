import React, { useState } from "react";
import destinationContext from "./destinationContext";

const Destination = (props) => {
  const host = "http://localhost:5000";
  const token = localStorage.getItem("token");
  const [destination, setDestination] = useState({ key: "domain", s1: "" });
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    level: "",
    gender: "",
    domain: "",
    type: "",
  });

  const fetchUser = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    });

    const json = await response.json();
    setUser({
      id: json._id,
      name: json.name,
      email: json.email,
      phone: json.phone,
      level: json.level,
      gender: json.gender,
      domain: json.domain,
      type: json.type,
    });
  };

  const userAvailability = async (
    id,
    day1,
    from1,
    to1,
    day2,
    from2,
    to2,
    day3,
    from3,
    to3
  ) => {
    await fetch(`${host}/api/auth/avail/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
      body: JSON.stringify({
        availability: {
          day1: day1,
          from1: from1,
          to1: to1,
          day2: day2,
          from2: from2,
          to2: to2,
          day3: day3,
          from3: from3,
          to3: to3,
        },
      }),
    });
  };

  return (
    <destinationContext.Provider
      value={{ destination, setDestination, user, fetchUser, userAvailability }}
    >
      {props.children}
    </destinationContext.Provider>
  );
};

export default Destination;
