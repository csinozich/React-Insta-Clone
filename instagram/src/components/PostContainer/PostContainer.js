import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import Post from './Post'
import PropTypes from 'prop-types'

const PostContainer = props => {
  return (
      <div>
        <Post key={props.index} post={props.post} />
        {console.log(props.post)}
        <CommentSection comments={props.post.comments} />
      </div>
  )
}

PostContainer.propTypes = {
  instaPosts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(PropTypes.object)
    })
  )
}

export default PostContainer
