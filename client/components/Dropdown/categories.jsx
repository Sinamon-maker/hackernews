import React, { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import ButtonDropdown from "./ButtonDropdown";
import InputChoosed from "./inputChoosed";

const Categories = () => {
  const { expanded, setExpanded, wrapperRef } = useOnClickOutside(false);
  const [choosed, setChoosed] = useState("");

  const HandleChoosed = (item) => {
    setChoosed(item);
  };

  const HandleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div ref={wrapperRef} className="container">
      <InputChoosed choosed={choosed} />
      <ButtonDropdown
        expanded={expanded}
        onClick={HandleClick}
        onChoosed={HandleChoosed}
      />
    </div>
  );
};

export default Categories;
