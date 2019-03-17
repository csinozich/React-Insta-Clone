import React from 'react';
import CommentIcon from '../../images/comment.png'
import Heart from '../../images/heart.svg'
import './posts.css'

const Likes = props => {
  return (
    <div>
      <div className='likes-icons'>
        <img className='likes-heart' src= {Heart} onClick={props.addLike}/>
        <img className='likes-comment' src={CommentIcon} />
      </div>
      <p className='likes-container' key='likes-container'>{props.likes}</p>
    </div>
  )
}

export default Likes;
