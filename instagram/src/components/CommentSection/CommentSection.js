import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.post.comments,
      comment: ''
    }
  }

  componentDidMount() {
    const id = this.props.post.timestamp;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.post.timestamp))
      })}
    else {
      this.setComment();
    }
  }

  componentWillUnmount() {
    this.setComment();
  }

  setComment = () => {
    localStorage.setItem(
      this.props.post.timestamp,
      JSON.stringify(this.state.comments)
    )
  }

  addComment = event => {
    this.setState({comment: event.target.value})
  }

  submitHandler = event => {
    event.preventDefault();
    const newComment = {text: this.state.comment, username: 'claire'};
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({comments, comment: ''});
    setTimeout(() => {this.setComment()}, 500)
  };

  render() {
    return(
      <div className='comment-section'>
        <div className='comments'>
          {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
        </div>
        <CommentInput
          comment = {this.state.comment}
          submitHandler = {this.submitHandler}
          addComment = {this.addComment}/>
      </div>
    )
  }
}
// const CommentSection = props => {
//   return (
//     <div className='comment-section'>
//       {props.comments.map((comment, index) =>
//         <Comment comment={comment} key={index}/>
//       )}
//       <CommentInput />
//     </div>
//   )
// }

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}


export default CommentSection
