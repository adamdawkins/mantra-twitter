import React from 'react'; import {mount} from 'react-mounter';
import MainLayout from './components/main_layout.jsx';
import Feed from './containers/feed.js';
import UserList from './containers/userlist.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Feed/>)
      });
    }
  });

  FlowRouter.route('/users', {
    name: 'users',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<UserList/>)
      });
    }
  });
}
