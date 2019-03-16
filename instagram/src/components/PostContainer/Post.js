import React from 'react';
import PostHeader from './PostHeader'

const Post = props => {
  return (
    <div>
      <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
      <img alt='thumbnail' src={props.post.imageUrl} />
    </div>
  )
}

export default Post;
