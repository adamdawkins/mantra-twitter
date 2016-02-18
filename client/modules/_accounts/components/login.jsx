import React from 'react';

class Login extends React.Component {
  render() {
    const {error} = this.props;

    return (
       <div>
         <h2>Login</h2>
         {error ? (<p className="error">{error}</p>) : null}
         <form onSubmit={this.onSubmit.bind(this)}>
           <input
             type="text"
             name="username_or_email"
             ref="identifier"
             placeholder="Username or email"
           />
           <input type="password" name="password" ref="password" placeholder="password"/>
           <button type="submit">Login</button>
         </form>
       </div>
     );
  }
  onSubmit(event) {
    event.preventDefault();
    const {login} = this.props;
    const {identifier, password} = this.refs;

    login(identifier.value, password.value);

  }
}

export default Login;
