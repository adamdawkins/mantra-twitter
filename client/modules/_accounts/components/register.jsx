import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.createUser.bind(this)}>
          <input type="text" name="username" ref="username" placeholder="Username"/>
          <input type="email" name="email" ref="email" placeholder="Email address:"/>
          <input type="password" name="password" ref="password" placeholder="password"/>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
  createUser(event) {
    event.preventDefault();

    const {create} = this.props;
    const {username, email, password} = this.refs;
    const options = {
      username: username.value,
      email: email.value,
      password: password.value
    };

    create(options);

  }
}

export default Register;
