import React from "react";
import "./button.scss";

const ButtonSecondary = ({ title, onClick }) => {
  return (
    <button className="btn btn-secondary" type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonSecondary;
