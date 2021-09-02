import React from "react";
import "./dropdown.scss";

const DataList = ({ choosed, onClick }) => {
  return (
    <ul className="list">
      <li className="list__item">
        <button
          onClick={() => onClick("Item1")}
          className="btn btn-list"
          type="button"
        >
          Item1
        </button>
      </li>
      <li>
        <button className="btn" type="button">
          Item2
        </button>
      </li>
      <li>
        <button className="btn" type="button">
          Item3
        </button>
      </li>
      <li>
        <button className="btn" type="button">
          Item4
        </button>
      </li>
      <li>
        <button className="btn" type="button">
          Item5
        </button>
      </li>
      <li>
        <button className="btn" type="button">
          Item6
        </button>
      </li>
      <li>
        <button className="btn" type="button">
          Item7
        </button>
      </li>
      <li>
        <button className="btn" type="button">
          Item8
        </button>
      </li>
      <li>
        <button className="btn" type="button">
          Item9
        </button>
      </li>
      <li>
        <button className="btn" type="button">
          Item10
        </button>
      </li>
    </ul>
  );
};

export default DataList;
