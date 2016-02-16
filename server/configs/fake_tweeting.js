import {Meteor} from 'meteor/meteor';
import {Tweets} from '/lib/collections';
import {Fake} from 'meteor/anti:fake';
import {Random} from 'meteor/random';

export default function () {
  Meteor.setInterval( () => {
    Meteor.call('fake.tweet');
  }, 20000);
}
