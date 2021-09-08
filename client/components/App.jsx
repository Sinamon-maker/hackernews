import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemsIds } from "../redux/reducers/news";
import "./root.scss";

import NewsContainer from "./newsContainer";
import Navbar from "./navbar";
import Button from "./utils/button";

const App = () => {
  const listNews = useSelector((s) => s.news.listNews);
  const dispatch = useDispatch();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTime(new Date());
    dispatch(getItemsIds());
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(new Date());
      dispatch(getItemsIds());
    }, 1000 * 60);
    return () => clearTimeout(timeout);
  }, [time]);

  const HandleClick = () => {
    dispatch(getItemsIds());
  };

  return (
    <div>
      <Navbar>
        <Button title={"Обновить"} onClick={HandleClick} />
      </Navbar>
      <NewsContainer />
    </div>
  );
};

export default App;
