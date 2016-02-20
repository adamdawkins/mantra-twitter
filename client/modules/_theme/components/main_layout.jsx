import React from 'react';
import _userControls from './user-controls.jsx';
import authContainer from '../../_accounts/containers/auth';
const UserControls = authContainer(_userControls);

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <h1>Mantra Twitter</h1>
      <UserControls/>
    </header>
    <main>
      {content()}
    </main>
  </div>
);

export default Layout;
