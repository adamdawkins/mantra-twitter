export default {
  authorize({Meteor, LocalState, FlowRouter}) {
    if (!Meteor.userId()) {
      LocalState.set('LOGIN_ERROR', 'You must be logged in to go to that page');
      return FlowRouter.go('/login');
    }
  }
};
