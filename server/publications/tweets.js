import {Tweets} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('tweets.all', function () {
    const selector = {};
    const options = {
      sort: {createdAt: -1}
    };

    return Tweets.find(selector, options);
  });
}
