import React from "react";

export const Alert = (props) => {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toString().toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div className="fixed z-50 bottom-5 left-5">
      {props.alert && (
        <div
          className={`${
            props.alert.type === "danger"
              ? "bg-red-400 border-red-600"
              : props.alert.type === "success"
              ? "bg-lightgreen border-green"
              : props.alert.type === "info"
              ? "bg-blue-400 border-blue-600"
              : "bg-yellow-400 border-yellow-600"
          } border-2 p-5 rounded-lg text-black`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
};
