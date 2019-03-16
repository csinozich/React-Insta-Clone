import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PostHeader from './PostHeader'

const Post = props => {
  return (
    <div>
      <PostHeader username={props.username} thumbnailURL={props.thumbnailUrl} />
      <img alt='thumbnail' src={props.imageUrl} />
      <CommentSection comments={props.comments} />
    </div>
  )
}

export default Post;
