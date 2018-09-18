import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import { css } from 'emotion';
import theme from '../../utils/theme';

type Props = {
  to: string,
  children: string,
};

const headerLinkItemStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  &::before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 17px;
    width: 0;
    height: 2px;
    height: 0.125rem;
    background-color: ${theme.colors.primary};
    transition: width 0.24s ease-in-out;
  }
`;

const activeLinkStyles: string = css`
  color: ${theme.colors.dark};

  .${headerLinkItemStyles}::before {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

const StyledHeaderLink = styled(Link)`
  padding: 0 ${p => p.theme.space[3]}px;
  display: flex;
  align-items: center;
  height: 100%;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    ${activeLinkStyles};
  }

  &:last-child {
    padding-right: 0;
  }
`;

const HeaderLink = (props: Props) => {
  const { to, children } = props;

  return (
    <StyledHeaderLink to={to} activeClassName={activeLinkStyles}>
      <span className={headerLinkItemStyles}>{children}</span>
    </StyledHeaderLink>
  );
};

export default HeaderLink;
