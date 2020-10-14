import { create } from 'react-test-renderer';
import Footer from '../src/components/Footer';

describe('<Footer />', () => {
  it('renders with correct styles', () => {
    const container = create(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
