import Cta from './index';

describe('<Cta />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cta />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
