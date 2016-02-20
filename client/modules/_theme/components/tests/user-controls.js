const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import UserControls from '../user-controls.jsx';

describe('_theme.components.user-controls', () => {
  describe('if user logged in', () => {
    const username = 'adamdawkins';
    const component = shallow(<UserControls loggedIn={true} username={username}/>);

    it('should show the user\'s username', () => {
      expect(component.html()).to.match(new RegExp(username));
    });

    it('should show a logout link', () => {
      expect(component.html()).to.match(/log\s?out/i);
    });
  });

  describe('if user not logged in', () => {
    const component = shallow(<UserControls loggedIn={false}/>);

    it('should show a sign up link', () => {
      expect(component.html()).to.match(/sign(-||\s)?up/i);
    });

    it('should show a login link', () => {
      expect(component.html()).to.match(/log\s?in/i);
    });
  });
});
