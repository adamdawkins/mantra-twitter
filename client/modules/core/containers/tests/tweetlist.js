const { describe, it } = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../tweetlist';

describe('core.containers.tweetlist', () => {
  describe('composer', () => {
    it('should subscribe to tweets.all', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});

      const context = () => ({Meteor});
      const onData = spy();

      composer({context}, onData);
      expect(Meteor.subscribe.args[0]).to.deep.equal([
        'tweets.all'
      ]);
    });

    describe('after subscribed', () => {
      it('should fetch data from all tweets and pass to onData', () => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});

        const tweets = [ {_id: 'aa'} ];
        const Collections = {Tweets: {find: stub()}};
        Collections.Tweets.find.returns({fetch: () => tweets});

        const context = () => ({Meteor, Collections});
        const onData = spy();

        composer({context}, onData);
        expect(onData.args[0]).to.deep.equal([ null, {tweets} ]);
      });
    });
  });
});
