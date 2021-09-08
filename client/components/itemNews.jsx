import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "./../redux/reducers/news";
import Navbar from "./navbar";
import Button from "./utils/button";
import NewsContent from "./newsContent";
import Comments from "./comments";
import history from "./../redux/history";

const ItemNews = () => {
  const { id } = useParams();
  const story = useSelector((s) => s.news.story);
  const dispatch = useDispatch();
  const item = story[id] || {};

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTime(new Date());
    dispatch(getItem(id));
  }, [id]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(new Date());
      dispatch(getItem(id));
    }, 1000 * 60);
    return () => clearTimeout(timeout);
  }, [time]);

  const HandleClick = () => {
    dispatch(getItem(id));
  };
  const onClickBack = () => history.push("/news");

  return (
    <div>
      <Navbar>
        <Button title={"Назад"} onClick={onClickBack} />
        <Button title={"Обновить"} onClick={HandleClick} />
      </Navbar>
      <div className="container">
        <NewsContent url={item.url} title={item.title} author={item.by} />

        <Comments comments={item.kids} counter={item.descendants} />
      </div>
    </div>
  );
};

export default ItemNews;
