import React from 'react';

export default class extends React.Component {
  onLogout(event) {
    event.preventDefault();
    const {logout} = this.props;
    return logout();
  }

  loggedInContent() {
    const {username} = this.props;

    return (
      <div>
        <ul>
          <li>
            Logged in as {username}
            <a onClick={this.onLogout.bind(this)}
              id="logout"
              href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    );
  }
  guestContent() {
    return (
      <div>
        <ul>
          <li>
            <a href="/register">Sign Up</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    );
  }
  render() {
    const {loggedIn} = this.props;
    return loggedIn ? this.loggedInContent() : this.guestContent();
  }
}
