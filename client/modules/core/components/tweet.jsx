import React from 'react';

const Tweet = ({tweet}) => (
  <div className="tweet">
    <img className="tweet__avatar" src={tweet.avatar} />
    <h2 className="tweet__username">{tweet.username}</h2>
    <p className="tweet__body">{tweet.body}</p>
  </div>
);

export default Tweet;
