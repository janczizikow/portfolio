// @flow
import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import { css } from 'emotion';
import { withTheme } from 'emotion-theming';
import type { Theme } from '../../utils/types';
import colorTheme from '../../utils/theme';

type HeaderLinkProps = {
  to: string,
  children?: string,
  theme: Theme,
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
    background-color: ${colorTheme.colors.primary};
    transition: width 0.24s ease-in-out;
  }
`;

const activeLinkStyles = css`
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
  color: ${p => p.theme.colors.textColor};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${p => p.theme.colors.headingColor};
    ${activeLinkStyles};
  }

  &:last-child {
    padding-right: 0;
  }
`;

const HeaderLink = (props: HeaderLinkProps) => {
  const { to, children, theme } = props;

  return (
    <StyledHeaderLink
      to={to}
      itemProp="url"
      activeClassName={activeLinkStyles}
      activeStyle={{ color: theme.colors.headingColor }}
    >
      <span itemProp="name" className={headerLinkItemStyles}>
        {children}
      </span>
    </StyledHeaderLink>
  );
};

export default withTheme((HeaderLink: React.ComponentType<HeaderLinkProps>));
