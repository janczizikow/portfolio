import Header from './index';

describe('<Header />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
