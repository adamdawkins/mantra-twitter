export default {

  create({Accounts, LocalState, FlowRouter}, options) {
    const {username, email, password} = options;
    if (!username || !email || !password) {
      return LocalState.set('REGISTER_ERROR', 'Username, email address and password are required');
    }

    LocalState.set('REGISTER_ERROR', null);

    Accounts.createUser({username, email, password}, (error) => {
      if (error) {
        return LocalState.set('REGISTER_ERROR', error.reason);
      }
      FlowRouter.go('/');
    });
  },

  login({Meteor, LocalState, FlowRouter}, identifier, password) {
    if (!identifier || !password) {
      return LocalState.set('LOGIN_ERROR', 'username or email address and password are required');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(identifier, password, (error) => {
      if (error) {
        return LocalState.set('LOGIN_ERROR', error.reason);
      }

      FlowRouter.go('/');
    });
  },

  logout({Meteor, FlowRouter}) {
    Meteor.logout(() => {
      FlowRouter.go('/');
    });
  }

};
