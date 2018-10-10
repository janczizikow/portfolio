import { Col } from '../components/UI';

describe('<Col />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Col />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
