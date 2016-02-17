const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MainLayout from '../main_layout.jsx';

describe('core.components.main_layout', () => {
  it('should render children', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <MainLayout content={() => (<Comp />)}/>
    );

    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
