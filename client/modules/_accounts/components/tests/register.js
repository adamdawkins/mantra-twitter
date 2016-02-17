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

  it('should pass the form values to the create function when submitted', done => {
    const submittedUsername = 'adamdawkins';
    const submittedEmail = 'adamdawkins@gmail.com';
    const submittedPassword = 'password';

    const onCreate = (options) => {
      const {username, email, password} = options;
      expect(username).to.be.equal(submittedUsername);
      expect(email).to.be.equal(submittedEmail);
      expect(password).to.be.equal(submittedPassword);
      done();
    };

    const component = shallow(<Register create={onCreate} />);
    const instance = component.instance();

    instance.refs = {
      username: {value: submittedUsername},
      email: {value: submittedEmail},
      password: {value: submittedPassword}
    };

    component.find('form').simulate('submit', {preventDefault: () => {}});
  });

});
