const { describe, it } = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../userlist';

describe('core.containers.userlist', () => {
  describe('composer', () => {
    it('should subscribe to users.all', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});

      const context = () => ({Meteor});
      const onData = spy();

      composer({context}, onData);
      expect(Meteor.subscribe.args[0]).to.deep.equal([
        'users.all'
      ]);
    });

    describe('after subscribed', () => {
      it('should fetch data from all tweets and pass to onData', () => {
        const Meteor = {subscribe: stub(), users: {find: stub()}};
        Meteor.subscribe.returns({ready: () => true});

        const users = [ {_id: 'aa'} ];
        Meteor.users.find.returns({fetch: () => users});

        const context = () => ({Meteor});
        const onData = spy();

        composer({context}, onData);
        expect(onData.args[0]).to.deep.equal([ null, {users} ]);
      });
    });
  });
});
