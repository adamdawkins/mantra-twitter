const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Login from '../login.jsx';

describe('_account.components.login', () => {
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

  // it('should pass the form values to the create function when submitted', done => {
  //   const submittedUsername = 'adamdawkins';
  //   const submittedEmail = 'adamdawkins@gmail.com';
  //   const submittedPassword = 'password';
  //
  //   const onCreate = (options) => {
  //     const {username, email, password} = options;
  //     expect(username).to.be.equal(submittedUsername);
  //     expect(email).to.be.equal(submittedEmail);
  //     expect(password).to.be.equal(submittedPassword);
  //     done();
  //   };
  //
  //   const component = shallow(<Login create={onCreate} />);
  //   const instance = component.instance();
  //
  //   instance.refs = {
  //     username: {value: submittedUsername},
  //     email: {value: submittedEmail},
  //     password: {value: submittedPassword}
  //   };
  //
  //   component.find('form').simulate('submit', {preventDefault: () => {}});
  // });

});
