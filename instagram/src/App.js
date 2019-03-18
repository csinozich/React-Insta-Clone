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
      filteredInstaPosts: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.setState({instaPosts: dummyData})
  }

  searchChangeHandler = event => {
    this.setState({value: event.target.value})
  }

  searchSubmitHandler = event => {
    this.setState((prevState) => {
          const filteredArray = prevState.instaPosts.filter(post => post.username.includes(prevState.searchInput))
          return {filteredInstaPosts: filteredArray}
      })
  }

  render() {
    return (
      <div className="App">
        <Search searchTerm={this.state.searchTerm} searchPosts={this.searchSubmitHandler}/>
        <PostContainer instaPosts={
          this.state.filteredInstaPosts.length > 0 ? this.state.filteredInstaPosts : this.state.instaPosts} />
      </div>
    );
  }
}

export default App;
