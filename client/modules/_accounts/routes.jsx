import React from 'react'; import {mount} from 'react-mounter';
import {Layout} from '/client/configs/theme.jsx';
import Register from './containers/register';
import Login from './containers/login';

export default function (injectDeps, {FlowRouter}) {
  const context = injectDeps(Layout);

  FlowRouter.route('/register', {
    name: 'accounts.register',
    action() {
      mount(context, {
        content: () => (<Register/>)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'accounts.login',
    action() {
      mount(context, {
        content: () => (<Login/>)
      });
    }
  });
}
