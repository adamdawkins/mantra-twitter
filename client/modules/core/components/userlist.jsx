import React from 'react';

const UserList = ({users}) => (
  <div className="user-list">
    {users.map( (user) => (
      <div className="user" key={user._id}>
        <img src={user.profile.picture.thumbnail} className="user__avatar" />
        <h2>{user.profile.name.first} {user.profile.name.last}</h2>
        <a className="button" href="#">Follow</a>
      </div>
    ))}
  </div>
);

export default UserList;
