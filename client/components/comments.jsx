import React, { useState } from "react";
import CommentItem from "./commentItem";
import ButtonSecondary from "./utils/buttonSecondary";

const Comments = (props) => {
  const [open, setOpen] = useState(false);
  if (props.counter === 0) return <p>no comments yet</p>;
  if (!props.comments) return null;
  const buttonText = props.counter
    ? `${props.counter} comments`
    : open
    ? "свернуть"
    : "развернуть";

  return (
    <div>
      <ButtonSecondary onClick={() => setOpen(!open)} title={buttonText} />
      {open ? (
        <ul className="list list-content">
          {props.comments.map((it) => (
            <CommentItem key={it} commentId={it} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Comments;
