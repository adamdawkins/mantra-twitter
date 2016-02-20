import React from 'react';
import Login from '/client/modules/_accounts/containers/login';

export default class extends React.Component {
  render() {
    const {loggedIn, content} = this.props;

    return loggedIn ? content() : <Login/>;
  }
}

