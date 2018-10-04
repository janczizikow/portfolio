import Footer from './index';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
