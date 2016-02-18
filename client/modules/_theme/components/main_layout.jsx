import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <h1>Mantra Twitter</h1>
      <a href="/register">Sign Up</a> | <a href="/login">Login</a>
    </header>
    <main>
      {content()}
    </main>
  </div>
);

export default Layout;
