import React from "react";

const InputButton = (props) => {
  return (
    <input className="input-button" type="button" onChange={props.onChange} />
  );
};

export default InputButton;
