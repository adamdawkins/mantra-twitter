import React from 'react';
import Tweet from './tweet.jsx';
import NewTweet from '../containers/new_tweet';

const Feed = ({tweets}) => (
  <div className="feed">
    <NewTweet/>
    {tweets.map( (tweet) => (
      <Tweet tweet={tweet} key={tweet._id}/>
    ))}

  </div>
);

export default Feed;
