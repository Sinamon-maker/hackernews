import React from "react";

const Input = (props) => {
  return (
    <input className="input-number" type="text" onChange={props.onChange} />
  );
};

export default Input;
