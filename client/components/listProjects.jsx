import React from "react";
import { dataProgects } from "../dataProject";
import "./root.scss";
import "./listProjects.scss";

const ListProjects = () => {
  const data = Object.keys(dataProgects);
  const headers = ["name", "data", "done", "rename", "delete"];
  return (
    <div className="container project-grid">
      <ul className="list list-project">
        {data.map((it) => (
          <li className="list-item list-content" key={it}>
            <div className="list-content__heading">
              <button className="btn btn-project">{it}</button>
            </div>

            <div className="list-content__buttons">
              <button className="btn btn-primary">rename</button>
              <button className="btn btn-secondary">delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProjects;
