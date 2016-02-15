import {HTTP} from 'meteor/http';
import {EJSON} from 'meteor/ejson';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

export default function () {
  const userCount = Meteor.users.find().count()
  if (userCount === 0) {
    HTTP.get('http://api.randomuser.me?results=20&key=6UG7-KN2H-NJ7M-DRX0', (error, result) => {
      if(error) {
        console.error(error)
      } else {
        result.data.results.forEach(object => {
          //console.log(object.user); 
          const {username, name, picture, email, password} = object.user;
          const profile = {name, picture};
          const user = {username, email, password, profile};
          Accounts.createUser(user);
        });
      }
    });
  } else {
    console.log(`You have ${userCount} users!`);
    Meteor.users.find().fetch().forEach( user => {
      console.log(user);
    });
  }
}
