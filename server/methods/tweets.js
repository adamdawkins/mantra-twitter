import {Tweets} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'tweets.create'(body) {
      check(body, String);

      if (!this.userId) {
        throw new Meteor.error(403, 'You must be logged in to tweet.');
      }

      const user = Meteor.user();

      const tweet = {
        body,
        authorId: user._id,
        username: user.username
      };

      Tweets.insert(tweet);
    }
  });
}
