const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NewTweet from '../new_tweet.jsx';

describe('core.components.NewTweet', () => {
  it('should contain a tweet form', () => {
    const component = shallow(<NewTweet/>);
    expect(component.find('[name="new-tweet__body"]').length).to.be.equal(1);
  });

  it('should pass the tweet to the create function when submitted', done => {
    const tweetBody = 'This is my tweet';
    const event = {
      preventDefault: () => {}
    };
    const createAction = (body) => {
      expect(body).to.be.equal(tweetBody);
      done();
    };

    const component = shallow(<NewTweet create={createAction} />);
    const instance = component.instance();

    instance.refs = {
      tweetBody: {value: tweetBody}
    };

    component.find('form').simulate('submit', event);
  });
});
