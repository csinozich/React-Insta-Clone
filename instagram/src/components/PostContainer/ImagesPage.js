import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import Search from '../SearchBar/Search';

class ImagesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      instaPosts: [],
      filteredInstaPosts: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.setState({ instaPosts: dummyData})
  }

  searchHandler = event => {
    const filteredArray = this.state.instaPosts.filter(post => {
      if(post.username.includes(this.state.searchTerm)) {
        return post
      }
      else {
        return null
      }
    });
    this.setState({filteredInstaPosts: filteredArray})
  }

  onChangeHandler = event => {
      this.setState({ searchTerm: event.target.value});
      this.searchHandler();
  }

  logout = event => {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return(
      <div className='App'>
        <Search
          searchTerm={this.state.searchTerm}
          onChangeHandler={this.onChangeHandler}
          logout={this.logout}
          />
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
