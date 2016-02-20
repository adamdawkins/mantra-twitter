import React from 'react'; import {mount} from 'react-mounter';
import {Layout} from '/client/configs/theme.jsx';
import Feed from './containers/feed.js';
import UserList from './containers/userlist.js';

export default function (injectDeps, {FlowRouter}) {
  const publicContext = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'feed',
    action() {
      mount(publicContext, {
        content: () => (<Feed/>),
        authRequired: true
      });
    }
  });

  FlowRouter.route('/users', {
    name: 'users',
    action() {
      mount(publicContext, {
        content: () => (<UserList/>)
      });
    }
  });
}
