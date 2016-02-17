import Register from '../components/register.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('REGISTER_ERROR');
  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  create: actions.accounts.create,
  content: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Register);
