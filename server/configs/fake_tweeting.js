import {HTTP} from 'meteor/http';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {Tweets} from '/lib/collections';
import {Fake} from 'meteor/anti:fake';
import {Random} from 'meteor/random';

export default function () {
  const users = Meteor.users.find().fetch();
  let i = 0

  while (i < 1000) {

    // wait up to a minute before sending the next tweet
    Meteor._sleepForMs(Random.fraction() * 60000);

    const user = Random.choice(users);
    const body = Fake.sentence().substring(0, 140);

    const tweet = {
      body,
      authorId: user._id,
      username: user.username,
      avatar: user.profile.picture.thumbnail
    };

    console.log(`${user.username} tweeted.`);
    Tweets.insert(tweet);
  }

}
