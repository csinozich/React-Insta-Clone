import React from 'react';
import './App.css';
import ImagesPage from './components/PostContainer/ImagesPage';
import Login from './components/Login/Login';
import withAuthenticator from './components/Login/withAuthenticator';



class App extends React.Component {

  render() {
    return(
      <div className='App'>
        <ComponentFromWithAuthenticator />
      </div>
    )
  }
}

const ComponentFromWithAuthenticator = withAuthenticator(ImagesPage)(Login);

export default App;
