const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../tweets';

describe('core.actions.tweets.create', () => {
  it('should reject if user not logged in', () => {
    const Meteor = {userId: () => {return undefined;}};
    const LocalState = {set: spy()};
    const body = 'The body of a tweet.';

    actions.create({Meteor, LocalState}, body);

    const args = LocalState.set.args[0];

    expect(args[0]).to.be.equal('TWEET.CREATE.ERROR');
    expect(args[1]).to.match(/logged in/);

  });

  it('should reject if body is undefined', () => {
    const userId = 'uniqueIdamirite?';
    const Meteor = {userId: () => {return userId;}};
    const LocalState = {set: spy()};
    const body = undefined;

    actions.create({Meteor, LocalState}, body);
    const args = LocalState.set.args[0];

    expect(args[0]).to.be.equal('TWEET.CREATE.ERROR');
    expect(args[1]).to.match(/required/);
  });

  it('should reject if the body is 0 characters long', () => {
    const userId = 'uniqueIdamirite?';
    const Meteor = {userId: () => {return userId;}};
    const LocalState = {set: spy()};
    const body = '';

    actions.create({Meteor, LocalState}, body);
    const args = LocalState.set.args[0];

    expect(args[0]).to.be.equal('TWEET.CREATE.ERROR');
    expect(args[1]).to.match(/required/);
  });
  it('should reject if body > 140 characters', () => {
    const userId = 'uniqueIdamirite?';
    const Meteor = {userId: () => {return userId;}};
    const LocalState = {set: spy()};
    let body = 'a long tweet.';

    for (let i = 0; i < 150; i++) {
      body = `${body}.`;
    }
    actions.create({Meteor, LocalState}, body);
    const args = LocalState.set.args[0];

    expect(args[0]).to.be.equal('TWEET.CREATE.ERROR');
    expect(args[1]).to.match(/140 characters/);
  });

  it('should call the tweets.create method', () => {
    const Meteor = {call: spy(), userId: () => { return 'aoeuoeu';}};
    const LocalState = {set: spy()};
    const body = 'The tweet body';
    actions.create({Meteor, LocalState}, body);

    const methodArgs = Meteor.call.args[0];
    expect(Meteor.call.calledOnce).to.equal(true);
    expect(methodArgs.slice(0,2)).to.deep.equal(
      [ 'tweets.create', body ]
    );
    expect(methodArgs[2]).to.be.a('function');

  });
  describe('after Meteor.call', () => {
    describe('with error', () => {
      it('should return set LocalState to the error reason', () => {
        const error = {reason: 'Something went wrong'};
        const Meteor = {call: stub(), userId: () => { return 'aoeuoeu';}};
        const LocalState = {set: spy()};
        const body = 'The tweet body';

        actions.create({Meteor, LocalState}, body);
        Meteor.call.callArgWith(2, error);

        expect(LocalState.set.args[0]).to.deep.equal(
          [ 'TWEET.CREATE.ERROR', error.reason ]
        );
      });
    });
  });

});
