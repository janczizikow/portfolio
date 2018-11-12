// @flow
import styled from 'react-emotion';

const FooterLink = styled.a`
  padding: 0 15px;
  color: inherit;
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s;
  transition: color 0.15s ease-in;

  &:hover {
    text-decoration: none;
    box-shadow: none;
    opacity: 0.7;
    transition: opacity 0.2s;
  }
`;

export default FooterLink;
