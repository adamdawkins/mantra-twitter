import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Tweets = new Mongo.Collection('tweets');
const Schemas = {};
Schemas.Tweet =
  new SimpleSchema({
    body: {
      type: String,
      max: 140
    },
    authorId: {
      type: String
    },
    avatar: {
      type: String,
      optional: true
    },
    username: {
      type: String
    },
    createdAt: {
      type: Date,
      autoValue() {
        if (this.isInsert) {
          return new Date();
        }

        if (this.isUpsert) {
          return {setOnInsert: new Date()};
        }
        this.unset();
      }
    }
  });

Tweets.attachSchema(Schemas.Tweet);

export { Tweets, Schemas };
