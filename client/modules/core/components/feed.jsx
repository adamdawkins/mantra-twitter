import React from 'react';
import Tweet from './tweet.jsx';
import NewTweet from './new_tweet.jsx';

const Feed = ({tweets}) => (
  <div className="feed">
    <NewTweet/>
    {tweets.map( (tweet) => (
      <Tweet tweet={tweet} key={tweet._id}/>
    ))}

  </div>
);

export default Feed;
