import toJson from 'enzyme-to-json';
import Footer from '../components/Footer';

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders with correct styles', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
