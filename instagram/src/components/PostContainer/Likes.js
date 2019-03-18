import React from 'react';
import CommentIcon from '../../images/comment.png'
import Heart from '../../images/heart.svg'
import './posts.css'

const Likes = props => {
  return (
    <div className='likes-container'>
      <div className='likes-icons'>
        <img className='likes-heart' alt='likes heart' src= {Heart} onClick={props.addLike}/>
        <img className='likes-comment' alt='comment icon' src={CommentIcon} />
      </div>
      <p className='likes-container username' key='likes-container'>{props.likes} likes</p>
    </div>
  )
}

export default Likes;
