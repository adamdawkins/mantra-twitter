import React from 'react';

const TweetList = ({tweets}) => (
  <div className="tweet-list">
    {tweets.map( (tweet) => (
      <div className="tweet" key={tweet._id}>
        <img className="tweet__avatar" src={tweet.avatar} />
        <h2 className="tweet__username">{tweet.username}</h2>
        <p className="tweet__body">{tweet.body}</p>
      </div>
    ))}

  </div>
);

export default TweetList;
