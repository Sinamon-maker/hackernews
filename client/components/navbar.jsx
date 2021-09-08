import React from "react";
import "./root.scss";

const Navbar = ({ children }) => {
  return (
    <nav className="heading">
      <h1>Hacker News</h1>
      <div className="heading__btn-container">{children}</div>
    </nav>
  );
};

export default Navbar;
