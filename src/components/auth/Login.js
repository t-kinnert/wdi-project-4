import React from 'react';
import axios from 'axios';
import { saveToken } from '../../lib/auth';
// import { handleChange } from '../../lib/common';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('this #1', this);
    axios.post('/api/login', this.state)
      .then(result => {
        console.log('this.state #2', this.state);
        saveToken(result.data.token);
        console.log('result.data.token', result.data.token);
        this.props.history.push('/');
      });
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input name="email" type="email" onChange={this.handleChange} value={this.state.email || ''} />

          <label>Password</label>
          <input name="password" type="password" onChange={this.handleChange} value={this.state.password || ''} />

          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
