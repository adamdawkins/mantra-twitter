import Feed from '../components/feed.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, authorize}, onData) => {
  const {Meteor, Collections} = context();
  // authorize();

  if (Meteor.subscribe('tweets.all').ready()) {
    const tweets = Collections.Tweets.find({}, {
      sort: {createdAt: -1}
    }).fetch();
    onData(null, {tweets});
  }

};

export const depsMapper = (context, actions) => ({
  authorize: actions.users.authorize,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Feed);
