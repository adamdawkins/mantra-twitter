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
        },
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/76.jpg'
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
        },
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/76.jpg'
        }
      }
    }
  ];

  it('should have some tests');
});
