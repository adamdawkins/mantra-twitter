const {describe, it} = global;
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import Tweet from '../tweet.jsx';

describe('core.components.tweet', () => {
  const tweet = {
    _id: '1235ns,heonthu',
    body: 'This is Adam\'s Tweet!',
    username: 'adamdawkins',
    avatar: 'http://placehold.it/40x40'
  };

  it('should have a class of tweet', () => {
    const element = shallow(<Tweet tweet={tweet}/>);
    expect(element.is('.tweet')).to.equal(true);
  });

  it('should display the body for the tweet', () => {
    const element = shallow(<Tweet tweet={tweet}/>);
    const tweetBodyText = element.find('.tweet__body').text();
    expect(tweetBodyText).to.equal(tweet.body);
  });

  it('should display the username for the tweet', () => {
    const element = shallow(<Tweet tweet={tweet}/>);
    const tweetUsernameText = element.find('.tweet__username').text();
    expect(tweetUsernameText).to.equal(tweet.username);
  });

  it('should display the avatar for the  tweet', () => {
    const element = shallow(<Tweet tweet={tweet}/>);
    const tweetAvatarSrc = element.find('.tweet__avatar').node.props.src;

    expect(tweetAvatarSrc).to.be.equal(tweet.avatar);

  });
});
