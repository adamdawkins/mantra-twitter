import {Mongo} from 'meteor/mongo';

const Schemas = {};
const Tweets  = new Mongo.Collection('tweets');

Schemas.Tweet = new SimpleSchema({
  body: {
    type: String,
    max: 140
  },
  author: {
    type: String
  },
  avatar: {
    type: String,
    optional: true
  },
  screenname: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: () => {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {setOnInsert: new Date()};
      } else {
        this.unset();
      }
    }
  }
});

Tweets.attachSchema(Schemas.Tweet);

export default Tweets;

