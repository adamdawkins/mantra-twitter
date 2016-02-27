export default {
  create({Meteor, LocalState}, body) {
    if (!Meteor.userId()) {
      return LocalState.set('TWEET.CREATE.ERROR', 'You must be logged in to tweet');
    }

    if (!body) {
      return LocalState.set(
        'TWEET.CREATE.ERROR',
        `A body for the tweet is required.`
      );
    }

    if (body.length > 140) {
      return LocalState.set(
        'TWEET.CREATE.ERROR',
        `Your tweet can't be longer than
         140 characters.`
      );
    }

    Meteor.call('tweets.create', body, (error) => {
      if (error) {
        return LocalState.set('TWEET.CREATE.ERROR', error.reason);
      }
    });
  }
};
