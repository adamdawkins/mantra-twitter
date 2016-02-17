import React from 'react'; import {mount} from 'react-mounter';
import {Layout} from '/client/configs/theme.jsx';
import Feed from './containers/feed.js';
import UserList from './containers/userlist.js';

export default function (injectDeps, {FlowRouter}) {
  const context = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(context, {
        content: () => (<Feed/>)
      });
    }
  });

  FlowRouter.route('/users', {
    name: 'users',
    action() {
      mount(context, {
        content: () => (<UserList/>)
      });
    }
  });
}
