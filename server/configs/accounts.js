import {Accounts} from 'meteor/accounts-base';

Accounts.onCreateUser( (options, user) => {
  const profile = options.profile || {};

  if (!profile.picture) {
    profile.picture = {
      large: '/avatars/large.png',
      medium: '/avatars/medium.png',
      thumbnail: '/avatars/thumb.png'
    };
  }

  if (!profile.name) {
    profile.name = {
      first: options.username,
      last: ''
    };
  }

  user.profile = profile;

  return user;
});
