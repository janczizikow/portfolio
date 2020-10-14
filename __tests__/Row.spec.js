import { create } from 'react-test-renderer';
import { Row } from '../src/components/UI';

describe('<Row />', () => {
  it('renders correctly with default styles', () => {
    const container = create(<Row />);
    expect(container).toMatchSnapshot();
  });
});
