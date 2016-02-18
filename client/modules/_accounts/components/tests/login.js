const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Login from '../login.jsx';

describe('_account.components.login', () => {
  it('should show any errors that exist', () => {
    const error = 'TheError';
    const component = shallow(<Login error={error}/>);
    expect(component.html()).to.match(/TheError/);
  });

  it('should have a "username or email" form field', () => {
    const component = shallow(<Login/>);
    expect(component.find('[name="username_or_email"]').length).to.be.equal(1);
  });


  it('should have a password form field', () => {
    const component = shallow(<Login/>);
    expect(component.find('[name="password"]').length).to.be.equal(1);
  });

  it('should have a submit button', () => {
    const component = shallow(<Login/>);
    expect(component.find('[type="submit"]').length).to.be.equal(1);
  });

  it('should pass the form values to the login function when submitted', done => {
    const submittedIdentifier = 'adamdawkins';
    const submittedPassword = 'password';

    const onLogin = (identifier, password) => {
      expect(identifier).to.be.equal(submittedIdentifier);
      expect(password).to.be.equal(submittedPassword);
      done();
    };

    const component = shallow(<Login login={onLogin} />);
    const instance = component.instance();

    instance.refs = {
      identifier: {value: submittedIdentifier},
      password: {value: submittedPassword}
    };

    component.find('form').simulate('submit', {preventDefault: () => {}});
  });

});
