const {describe, it} = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import actions from '../users';

describe('core.actions.users.authorize', () => {
  describe('if user is not logged in', () => {
    it('should set LOGIN_ERROR to "must be logged in"', () => {
      const Meteor = {userId: () => {return null;}};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};

      actions.authorize({Meteor, LocalState, FlowRouter});
      expect(LocalState.set.args[0]).to.deep.equal(
        [ 'LOGIN_ERROR', 'You must be logged in to go to that page' ]
      );

    });

    it('should redirect to "/login"', () => {
      const Meteor = {userId: () => {return null;}};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};

      actions.authorize({Meteor, LocalState, FlowRouter});
      expect(FlowRouter.go.args[0][0]).to.be.equal('/login');
    });

  });
});
