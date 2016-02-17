const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MainLayout from '../main_layout.jsx';

describe('_theme.components.main_layout', () => {
  it('should render children', () => {
    const component = () => (<p>Hello</p>);
    const el = shallow(
      <MainLayout content={() => (<component />)}/>
    );

    expect(el.contains(<component />)).to.be.equal(true);
  });
});
