import React from 'react';
import './App.css';
import ImagesPage from './components/PostContainer/ImagesPage';
import Login from './components/Login/Login';
import Authenticate from './components/Login/Authenticate';



class App extends React.Component {

  render() {
    return(
      <div className='App'>
        <ComponentAuthenticate />
      </div>
    )
  }
}

const ComponentAuthenticate = Authenticate(ImagesPage)(Login);

export default App;
