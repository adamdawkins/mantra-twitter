const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Register from '../register.jsx';

describe('_account.components.register', () => {
  it('should have a username form field', () => {
    const component = shallow(<Register/>);
    expect(component.find('[name="username"]').length).to.be.equal(1);
  });

  it('should have an email form field', () => {
    const component = shallow(<Register/>);
    expect(component.find('[name="email"]').length).to.be.equal(1);
  });

  it('should have a password form field', () => {
    const component = shallow(<Register/>);
    expect(component.find('[name="password"]').length).to.be.equal(1);
  });

  it('should have a submit button', () => {
    const component = shallow(<Register/>);
    expect(component.find('[type="submit"]').length).to.be.equal(1);
  });

});
