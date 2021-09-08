import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { getItem } from "./../redux/reducers/news";
import "./root.scss";

const ListItem = ({ id }) => {
  const story = useSelector((s) => s.news.story);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItem(id));
  }, [id]);
  const item = story[id] || {};

  const convertTime = (item) => {
    return moment(item.time * 1000).format("MMMM Do YYYY, h:mm:ss a");
  };
  return (
    <li className="list-item">
      <div className="list-news__heading">
        <Link to={`/news/${id}`} className="list-news__link">
          {item.title}
        </Link>
      </div>

      <span>by: {item.by}</span>
      <span>rate {item.score}</span>
      <span>{convertTime(item)}</span>
    </li>
  );
};

export default ListItem;
