import React, { useState } from "react";
import destinationContext from "./destinationContext";

const Destination = (props) => {
  const host = "http://localhost:4000";
  const token = localStorage.getItem("token");
  const [destination, setDestination] = useState({ key: "domain", s1: "" });
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    level: "",
    gender: "",
    domain: "",
    type: "",
    showAvailability: "",
  });

  const fetchUser = async () => {
    setLoading(true);
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    });
    setLoading(false);
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
      showAvailability: json.showAvailability,
    });
  };

  const fetchAllUsers = async () => {
    const response = await fetch(`${host}/api/auth/allusers`, {
      method: "GET",
    });

    const json = await response.json();
    setAllUsers(json);
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
    to3,
    avail
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
        showAvailability: avail,
      }),
    });
  };

  return (
    <destinationContext.Provider
      value={{
        destination,
        setDestination,
        user,
        fetchUser,
        userAvailability,
        loading,
        fetchAllUsers,
        allUsers,
      }}
    >
      {props.children}
    </destinationContext.Provider>
  );
};

export default Destination;
