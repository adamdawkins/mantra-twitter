import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import NewTweet from '../components/new_tweet.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('TWEET.CREATE.ERROR');

  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  create: actions.tweets.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewTweet);
