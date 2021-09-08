import React from "react";

const NewsContent = (props) => {
  return (
    <div className="content">
      <h2>{props.title}</h2>

      <a target="blank" href={props.url}>
        {props.url}
      </a>
      <span>by:{props.author}</span>
    </div>
  );
};

export default NewsContent;
