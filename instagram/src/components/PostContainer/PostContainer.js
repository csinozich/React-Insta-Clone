import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import Post from './Post'
import PropTypes from 'prop-types'

const PostContainer = props => {
  return (
    <div>
      {props.instaPosts.map(post => (
        <Post key={props.instaPosts.thumbnailUrl} post={props.instaPosts} />
      ))}
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
