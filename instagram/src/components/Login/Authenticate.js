import React from 'react';

const Authenticate = ImagesPage => Login => {
  class Authenticator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      if(!localStorage.getItem('username')) {
        this.setState({loggedIn: false})
      }
      else {
        this.setState({loggedIn: true})
      }
    }

    render() {
      if(this.state.loggedIn) {
        return <ImagesPage />
      };
      return <Login />
    }
  }
};

export default Authenticate;
