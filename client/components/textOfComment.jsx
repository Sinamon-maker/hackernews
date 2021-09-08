import React from "react";
import parse from "html-react-parser";
import "./root.scss";

const TextOfComment = (props) => {
  const str = props.text || "";
  return (
    <div className="list-content__comment-text">
      {parse(str)}
      <span>by:{props.author}</span>
    </div>
  );
};

export default TextOfComment;
