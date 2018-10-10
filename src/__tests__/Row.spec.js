import { Row } from '../components/UI';

describe('<Row />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Row />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
