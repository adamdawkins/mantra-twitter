import Feed from '../components/feed.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('tweets.all').ready()) {
    const tweets = Collections.Tweets.find({}, { sort:{createdAt: -1}}).fetch();
    onData(null, {tweets});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Feed);
