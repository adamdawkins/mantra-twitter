import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('users.all', function () {
    return Meteor.users.find();
  });
}
