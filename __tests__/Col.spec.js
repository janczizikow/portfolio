import { create } from 'react-test-renderer';
import { Col } from '../src/components/UI';

describe('<Col />', () => {
  it('renders correctly with default styles', () => {
    const container = create(<Col />);
    expect(container).toMatchSnapshot();
  });
});
