import toJson from 'enzyme-to-json';
import Footer from '.';

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Footer />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders with correct styles', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
