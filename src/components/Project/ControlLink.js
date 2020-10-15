import { Link } from 'gatsby';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

const ControlLink = styled(Link, { shouldForwardProp })`
  margin-left: ${p => p.prev && '-0.5rem'};
  margin-right: ${p => p.next && '-0.5rem'};
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.headingColor};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s linear;

  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;

export default ControlLink;
