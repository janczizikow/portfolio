import styled from '@emotion/styled';
import { Link } from 'gatsby';

const MobileMenuLink = styled(Link)`
  margin-bottom: 0.75rem;
  display: block;
  font-size: 2.25rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1.5px;
  color: ${p => p.theme.colors.white};
  opacity: 0.6;
`;

export default MobileMenuLink;
