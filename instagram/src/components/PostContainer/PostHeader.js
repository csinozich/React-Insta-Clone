import React from 'react';

const PostHeader = props => {
  return (
    <div>
      <img alt='post-header' src={props.thumbnailUrl} />
      <p>{props.username}</p>
    </div>
  )
}

export default PostHeader
