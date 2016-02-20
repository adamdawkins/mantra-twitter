const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MainLayout from '../main_layout.jsx';

describe('_theme.components.main_layout', () => {
  const component = () => (<p>Hello</p>);

  describe('if authRequired is true', () => {
    it('should have tests to check it renders AuthRender');
  });

  it('should render children', () => {
    const layout = shallow(
      <MainLayout content={() => (<component />)}/>
    );
    expect(layout.contains(<component />)).to.be.equal(true);
  });
});
