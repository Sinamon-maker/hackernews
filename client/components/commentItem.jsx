import React, { useState, useEffect } from "react";
import Comments from "./comments";
import TextOfComments from "./textOfComment";
import { getComment } from "./../redux/reducers/news";
import "./root.scss";

const CommentItem = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    getComment(props.commentId).then(({ data }) => setItem(data));
  }, []);

  return (
    <li className="list-item list-content__comment">
      <TextOfComments text={item.text} author={item.by} />
      {item.kids && <Comments text={item.text} comments={item.kids} />}
    </li>
  );
};

export default CommentItem;
