import './login.css';
import React from 'react';
import Camera from '../../images/camera.svg'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    const username = this.state.username;
    localStorage.setItem('username', username);
    window.location.reload();
  }

  render() {
    return (
      <div className='login-container'>
        <img alt='camera-icon' src={Camera} />
        <h3>Welcome to Instagram </h3>
        <div className='login-form'>
          <form>
            <input
              type='text'
              placeholder='username'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type='password'
              placeholder='password'
              name= 'password'
              value= {this.state.password}
              onChange={this.handleChange}
              />
            <button onClick={this.handleSubmit}>Log in</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
