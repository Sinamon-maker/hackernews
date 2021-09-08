import React from "react";
import "./button.scss";

const Button = ({ title, onClick }) => {
  return (
    <button className="btn btn-primary" type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default React.memo(Button);
