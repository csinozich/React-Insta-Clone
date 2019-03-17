import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import Search from './components/SearchBar/search'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instaPosts: [],
      filteredInstaPosts: []
    }
  }

  componentDidMount() {
    this.setState({instaPosts: dummyData})
  }

  searchHandler = event => {
    const instaPosts= this.state.instaPosts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({filteredInstaPosts: instaPosts})
  }

  render() {
    return (
      <div className="App">
        <Search searchTerm={this.state.searchTerm} searchPosts={this.searchHandler}/>
        <PostContainer instaPosts={
          this.state.filteredInstaPosts.length > 0 ? this.state.filteredInstaPosts : this.state.instaPosts} />
      </div>
    );
  }
}

export default App;
