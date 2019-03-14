import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Search from './components/SearchBar/search';
import Posts from './components/PostContainer/posts';
import Comments from './components/CommentSection/comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Posts />
        <Comments />
      </div>
    );
  }
}

export default App;
