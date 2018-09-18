import React from 'react';
import styled from 'react-emotion';
import { Box } from '../UI';
import HeaderLink from './HeaderLink';

type Props = {
  links: {
    to: string,
    text: string,
  }[],
};

const HeaderLinksNav = styled(Box)`
  display: none;

  @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

const HeaderLinks = (props: Props) => {
  const { links } = props;

  let headerLinks = null;

  if (links) {
    headerLinks = links.map(link => (
      <HeaderLink key={link.text} to={link.to}>
        {link.text}
      </HeaderLink>
    ));
  }

  return <HeaderLinksNav is="nav">{headerLinks}</HeaderLinksNav>;
};

export default HeaderLinks;
