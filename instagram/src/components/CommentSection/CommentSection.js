import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput'


const CommentSection = props => {
  return (
    <div>
      {props.comments.map((comment, index) =>
        <Comment comment={comment} key={index}/>
      )}
      <CommentInput />
    </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}


export default CommentSection
