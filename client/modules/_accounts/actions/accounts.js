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
  }

};
