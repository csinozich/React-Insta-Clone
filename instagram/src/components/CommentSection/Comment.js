import React from 'react';

const Comment = props => {
  return (
    <div>
      <p>{props.comment.text}</p>
      <p>{props.comment.username}</p>
    </div>
  )
}

export default Comment;
