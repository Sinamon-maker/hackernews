import React from "react";
import DataList from "./list";
import "./dropdown.scss";

const ButtonForDropDown = ({
  expanded,
  onClick,
  onChoosed,
  selected,
  children,
}) => {
  return (
    <div className="dropdown-wrapper">
      <button
        className="btn btn-down dropdown-wrapper__btn expanded"
        onClick={onClick}
      ></button>

      {expanded && <DataList onClick={onChoosed} />}
    </div>
  );
};

export default ButtonForDropDown;
