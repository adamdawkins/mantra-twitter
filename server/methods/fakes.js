import {Meteor} from 'meteor/meteor';
import {Tweets} from '/lib/collections';

export default function () {
  Meteor.methods({
    'fake.tweet'() {
      const users = Meteor.users.find().fetch();

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
  });
}
