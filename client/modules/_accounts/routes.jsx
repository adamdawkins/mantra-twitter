import React from 'react'; import {mount} from 'react-mounter';
import {Layout} from '/client/configs/theme.jsx';
import Register from './components/register.jsx';

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
}
