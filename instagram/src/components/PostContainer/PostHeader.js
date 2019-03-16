import React from 'react';

const PostHeader = props => {
  return (
    <div className='post-header'>
      <img alt='post-header' className='thumbnail-img' src={props.thumbnailUrl} />
      <p className='username header-username'>{props.username}</p>
    </div>
  )
}

export default PostHeader
