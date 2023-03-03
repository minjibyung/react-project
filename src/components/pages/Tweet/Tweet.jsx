import React, { useState } from 'react';
import './Tweet.css';

export const Tweet = () => {

    const [tweetText, setTweetText] = useState('');
    const [archivedTweets, setArchivedTweets] = useState([]);
    const [tweetsToPublish, setTweetsToPublish] = useState([]);
  
    const generateTweet = () => {
      if (tweetText.length <= 255) {
        setArchivedTweets([...archivedTweets, tweetText]);
        setTweetText('');
      } else {
        alert('Tweet too long! Maximum length is 255 characters.');
      }
    };
  
    const publishTweets = () => {
      setTweetsToPublish([...tweetsToPublish, ...archivedTweets]);
      setArchivedTweets([]);
    };
  
    return (
      <div className="container">
        <h2>Tweet Generator</h2>
        <textarea
          value={tweetText}
          onChange={(event) => setTweetText(event.target.value)}
        />
        <p>{tweetText.length}/255</p>
        <button onClick={generateTweet}>Generate Tweet</button>
        <hr />
        <h3>Archived Tweets</h3>
        <ul>
          {archivedTweets.map((tweet) => (
            <li key={tweet}>{tweet}</li>
          ))}
        </ul>
        <button onClick={publishTweets}>Publish Tweets</button>
        <hr />
        <h3>Tweets to Publish</h3>
        <ul>
          {tweetsToPublish.map((tweet) => (
            <li key={tweet}>{tweet}</li>
          ))}
        </ul>
      </div>
    );
          }