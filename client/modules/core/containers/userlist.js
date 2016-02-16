import UserList from '../components/userlist.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  if (Meteor.subscribe('users.all').ready()) {
    const users = Meteor.users.find().fetch();
    onData(null, {users});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(UserList);
