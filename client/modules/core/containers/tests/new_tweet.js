const { describe, it } = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {composer} from '../new_tweet';

describe('core.containers.new_tweet', () => {
  describe('composer', () => {
    it('should pass TWEET.CREATE.ERROR from LocalState to onData', () => {
      const theError = 'Something went wrong.';
      const LocalStateHash = {
        'TWEET.CREATE.ERROR': theError
      };

      const LocalState = {
        get: (key) => {
          return LocalStateHash[key];
        }
      };

      const context = () => ({LocalState});
      const onData = spy();

      composer({context}, onData);
      expect(onData.args[0]).to.deep.equal(
        [ null, {error: theError} ]
      );
    });
  });
  describe('depsMapper', () => {
    it('should map actions.tweets.create');
  });
});
