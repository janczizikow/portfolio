import styled from '@emotion/styled';
import Text from './Text';

const defaultProps = {
  is: 'a',
};

const Link = styled(Text)`
  color: ${p => p.theme.colors.primary};
  text-decoration: none;
  box-shadow: inset 0 -8px 0 rgba(39, 124, 234, 0.1);
  transition: box-shadow 0.2s, color 0.2s;

  &:hover {
    box-shadow: inset 0 -24px 0 rgba(39, 124, 234, 0.2);
    border-radius: 0;
  }
`;

Link.defaultProps = defaultProps;

export default Link;
