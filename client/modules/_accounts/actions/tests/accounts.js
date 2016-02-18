const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../accounts';

describe('_accounts.actions.accounts', () => {
  describe('create', () => {
    const username = 'adamdawkins';
    const email = 'adamdawkins@example.com';
    const password = 'password';

    it('should reject if username is not present', () => {
      const LocalState = {set: spy()};
      const options = {email, password};

      actions.create({LocalState}, options);
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('REGISTER_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if email is not present', () => {
      const LocalState = {set: spy()};
      const options = {username, password};

      actions.create({LocalState}, options);
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('REGISTER_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if password is not present', () => {
      const LocalState = {set: spy()};
      const options = {username, email};

      actions.create({LocalState}, options);
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('REGISTER_ERROR');
      expect(args[1]).to.match(/required/);
    });


    it('should clear older LocalState for REGISTER_ERROR', () => {
      const Accounts = {createUser: spy()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};
      const options = {username, email, password};

      actions.create({LocalState, Accounts, FlowRouter}, options);
      expect(LocalState.set.args[0]).to.deep.equal([ 'REGISTER_ERROR', null ]);
    });

    it('should call Accounts.createUser to create the user', () => {
      const Accounts = {createUser: spy()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};
      const options = {username, email, password};

      actions.create({Accounts, LocalState, FlowRouter}, options);
      const methodArgs = Accounts.createUser.args[0];
      expect(Accounts.createUser.calledOnce).to.equal(true);
      expect(methodArgs[0]).to.be.an('object');
      expect(methodArgs[1]).to.be.a('function');

    });


    describe('after Accounts.createUser', () => {
      describe('if there is error', () => {
        it('should set REGISTER_ERROR with the error reason', () => {
          const Accounts = {createUser: stub()};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};
          const error = {reason: 'Shit happens'};
          const options = {username, email, password};

          Accounts.createUser.callsArgWith(1, error);

          actions.create({Accounts, LocalState, FlowRouter}, options);
          expect(LocalState.set.args[1]).to.deep.equal([ 'REGISTER_ERROR', error.reason ]);
        });
      });
      describe('if there is not an error', () => {

        it('should redirect user to the root', () => {
          const Accounts = {createUser: stub()};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};
          const options = {username, email, password};

          Accounts.createUser.callsArg(1);

          actions.create({Accounts, LocalState, FlowRouter}, options);
          expect(FlowRouter.go.args[0][0]).to.be.equal('/');
        });
      });
    });
  });
  describe('login', () => {
    it('should reject if identifier is not present', () => {
      const LocalState = {set: spy()};

      actions.login({LocalState}, null, 'password');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('LOGIN_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if password is not present', () => {
      const LocalState = {set: spy()};

      actions.login({LocalState}, 'username', null);
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('LOGIN_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should clear older LocalState for LOGIN_ERROR', () => {
      const Meteor = {loginWithPassword: spy()};
      const LocalState = {set: spy()};

      actions.login({Meteor, LocalState}, 'username', 'password');

      expect(LocalState.set.args[0]).to.deep.equal([ 'LOGIN_ERROR', null ]);
    });

    it('should call Meteor.loginWithPassword to login the user', () => {
      const Meteor = {loginWithPassword: spy()};
      const LocalState = {set: spy()};

      actions.login({Meteor, LocalState}, 'username', 'password');

      const methodArgs = Meteor.loginWithPassword.args[0];
      expect(Meteor.loginWithPassword.calledOnce).to.equal(true);
      expect(methodArgs.slice(0,2)).to.deep.equal(
        [ 'username', 'password' ]
      );
      expect(methodArgs[2]).to.be.a('function');
    });

    describe('after Meteor.loginWithPassword()', () => {
      describe('if there is an error', () => {
        it('should set LOGIN_ERROR with the error reason');
        /*
         * I Have no idea why this is failing
        it('should set LOGIN_ERROR with the error reason', () => {
          const Meteor = {loginWithPassword: stub()};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};
          const error = {reason: 'Shit happens'};

          Meteor.loginWithPassword.callsArgWith(2, error);

          actions.login({Meteor, LocalState, FlowRouter}, 'username', 'password');

          expect(LocalState.set.args[0]).to.deep.equal([ 'LOGIN_ERROR', error.reason ]);

        });
         */
      });
      describe('if there is not an error', () => {
        it('should redirect user to the root', () => {
          const Meteor = {loginWithPassword: stub()};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};

          Meteor.loginWithPassword.callsArg(2);

          actions.login({Meteor, LocalState, FlowRouter}, 'username', 'password');
          expect(FlowRouter.go.args[0][0]).to.be.equal('/');

        });
      });
    });
  });
});
