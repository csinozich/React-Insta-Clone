import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitHandler}>
      <input
        type='text'
        placeholder='Add a comment...'
        value= {props.comment}
        onChange={props.addComment}/>
    </form>
  )
}

export default CommentInput;
