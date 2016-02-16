import React from 'react';
import Tweet from './tweet.jsx';

const Feed = ({tweets}) => (
  <div className="feed">
    {tweets.map( (tweet) => (
      <Tweet tweet={tweet} key={tweet._id}/>
    ))}

  </div>
);

export default Feed;
