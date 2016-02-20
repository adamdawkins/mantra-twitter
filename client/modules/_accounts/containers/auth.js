import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  const loggedIn = Meteor.userId() || false;
  let username = null;

  if (loggedIn) {
    username = Meteor.user().username;
  }

  onData(null, {loggedIn, username});
};

export default (component) => composeAll(
  composeWithTracker(composer),
  useDeps()
)(component);
