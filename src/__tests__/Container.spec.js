import toJson from 'enzyme-to-json';
import { Container } from '../components/UI';

describe('<Container />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Container />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders children', () => {
    wrapper.setProps({ children: 'text' });
    expect(wrapper.text()).toBe('text');
  });

  it('renders with correct styles', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
