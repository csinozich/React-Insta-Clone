import React from 'react';
import './comments.css';

const Comment = props => {
  return (
    <div className='comment'>
      <p><span className='username'>{props.comment.username}</span> {props.comment.text}</p>
    </div>
  )
}

export default Comment;
