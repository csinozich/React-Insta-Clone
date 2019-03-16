import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instaPosts: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
        <PostContainer instaPosts={this.state.instaPosts}/>
      </div>
    );
  }
}

export default App;
