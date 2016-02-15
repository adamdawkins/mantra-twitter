const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import TweetList from '../tweetlist.jsx';

describe('core.components.tweetlist', () => {
  const tweets = [
    {
      body: 'This is Adam\'s Tweet!',
      username: 'adamdawkins',
      avatar: 'http://placehold.it/40x40'
    },

    {
      body: '@adamdawkins I disagree! You are owned by Twitter.',
      username: 'aral',
      avatar: 'http://placehold.it/40x40'
    }
  ];

  it('should list given number of tweets', () => {
    const element = shallow(<TweetList tweets={tweets}/>);
    expect(element.find('.tweet').length).to.be.equal(tweets.length);
  });

  it('should display the body for each tweet', () => {
    const element = shallow(<TweetList tweets={tweets}/>);
    const tweetElements = element.find('.tweet');

    tweetElements.forEach((tweetElement, index) => {
      const tweetBodyText = tweetElement.find('.tweet__body').text();
      expect(tweetBodyText).to.be.equal(tweets[index].body);
    });

  });

  it('should display the username for each tweet', () => {
    const element = shallow(<TweetList tweets={tweets}/>);
    const tweetElements = element.find('.tweet');

    tweetElements.forEach((tweetElement, index) => {
      const tweetUsernameText = tweetElement.find('.tweet__username').text();
      expect(tweetUsernameText).to.be.equal(tweets[index].username);
    });

  });

  it('should display the avatar for each tweet', () => {
    const element = shallow(<TweetList tweets={tweets}/>);
    const tweetElements = element.find('.tweet');

    tweetElements.forEach((tweetElement, index) => {
      const tweetAvatarSrc = tweetElement.find('.tweet__avatar').node.props.src;
      expect(tweetAvatarSrc).to.be.equal(tweets[index].avatar);
    });

  });
});
