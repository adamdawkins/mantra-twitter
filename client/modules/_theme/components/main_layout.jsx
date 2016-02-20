import React from 'react';
import _userControls from './user-controls.jsx';
import _authRender from './auth_render.jsx';
import authContainer from '../../_accounts/containers/auth';

const UserControls = authContainer(_userControls);
const AuthRender = authContainer(_authRender);

const Layout = ({content = () => null, authRequired = false}) => (
  <div>
    <header>
      <h1>Mantra Twitter</h1>
      <UserControls/>
    </header>
    <main>
      {authRequired ? <AuthRender content={content} /> : content()}
    </main>
  </div>
);

export default Layout;
