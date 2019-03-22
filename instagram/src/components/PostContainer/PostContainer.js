import React from 'react';

import Post from './Post'
import PropTypes from 'prop-types'
import './posts.css'

const PostContainer = props => {
  return (
      <div className='post-container'>
        {props.instaPosts.map(post => <Post key={post.imageUrl} post={post} />)}
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
