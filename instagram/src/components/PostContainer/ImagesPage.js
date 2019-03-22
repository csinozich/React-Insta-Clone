import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import Search from '../SearchBar/Search';

class ImagesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instaPosts: [],
      filteredInstaPosts: []
    }
  }

  componentDidMount() {
    this.setState({ instaPosts: dummyData})
  }

  searchHandler = event => {
    const filteredArray = this.state.instaPosts.filter(post => {
      if(post.username.includes(event.target.value)) {
        return post
      }
      else {
        return null
      }
    });
    this.setState({filteredInstaPosts: filteredArray})
  }

  render() {
    return(
      <div className='App'>
        <Search
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchHandler} />
        <PostContainer
          instaPosts={
            this.state.filteredInstaPosts.length > 0
              ? this.state.filteredInstaPosts
              : this.state.instaPosts
          } />
      </div>
    )
  }
}

export default ImagesPage;
