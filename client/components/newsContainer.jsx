import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "./listItem";

import "./root.scss";

const NewsContainer = () => {
  const listNews = useSelector((s) => s.news.listNews);

  return (
    <div className="container">
      <ul className="list list-news">
        {listNews.map((newsId) => (
          <ListItem key={newsId} id={newsId} />
        ))}
      </ul>
    </div>
  );
};

export default NewsContainer;
