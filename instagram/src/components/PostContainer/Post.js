import React from 'react';
import PostHeader from './PostHeader'
import CommentSection from '../CommentSection/CommentSection'
import Likes from './Likes'
import './posts.css'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    }
  }

  addLike = () => {
    let likes = this.state.likes +1;
    this.setState({ likes })
  }

  render() {
    return (
      <div className='post'>
        <PostHeader username={this.props.post.username} thumbnailUrl={this.props.post.thumbnailUrl}/>
        <img className='main-image' alt='thumbnail' src={this.props.post.imageUrl} />
        <Likes addLike={this.addLike} likes={this.state.likes} />
        <CommentSection id={this.props.post.imageUrl} post={this.props.post} comments={this.props.post.comments} />
      </div>
    )
  }
}

// const Post = props => {
//   return (
//     <div>
//       <PostHeader username={props.username} thumbnailUrl={props.thumbnailUrl} />
//       <img className='main-image' alt='thumbnail' src={props.imageUrl} />
//       <CommentSection comments={props.posts} />
//     </div>
//   )
// }

export default Post;
