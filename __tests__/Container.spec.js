import { create } from 'react-test-renderer';
import { Container } from '../src/components/UI';

describe('<Container />', () => {
  it('renders correctly with default styles', () => {
    expect(create(<Container />)).toMatchSnapshot();
  });
});
