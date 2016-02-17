import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.setInterval( () => {
    Meteor.call('fake.tweet');
  }, 20000);
}
