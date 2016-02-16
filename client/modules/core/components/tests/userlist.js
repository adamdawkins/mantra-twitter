const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import UserList from '../userlist.jsx';

describe('core.components.userlist', () => {
  const users = [
    {
      _id: 'naoethunaoth',
      username: 'adamdawkins',
      profile: {
        name: {
          title: 'Mr',
          first: 'Adam',
          last: 'Dawkins'
        }
      }
    },
    {
      _id: 'asnoetuhanoteuh',
      username: 'johntnorris',
      profile: {
        name: {
          title: 'Mr',
          first: 'John',
          last: 'Norris'
        }
      }
    }
  ];

  it('should have some tests', () => {
    const component = shallow(<UserList users={users}/>);
    expect(component).to.be.equal(false);
  });
});
