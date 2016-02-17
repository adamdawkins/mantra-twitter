import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="username" ref="username" placeholder="Username"/>
          <input type="email" name="email" ref="email" placeholder="Email address:"/>
          <input type="password" name="password" ref="password" placeholder="password"/>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
