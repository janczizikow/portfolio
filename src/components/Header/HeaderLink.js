import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { ClassNames, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { PRIMARY_COLOR } from '../../utils/themes';

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string,
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
    background-color: ${PRIMARY_COLOR};
    transition: width 0.24s ease-in-out;
  }
`;

const activeLinkStyles = css`
  span::before {
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

  &:last-of-type {
    padding-right: 0;
  }
`;

const HeaderLink = ({ to, children }) => {
  const theme = useTheme();
  return (
    <ClassNames>
      {classNames => (
        <StyledHeaderLink
          to={to}
          itemProp="url"
          activeClassName={classNames.css`${activeLinkStyles}`}
          activeStyle={{ color: theme.colors.headingColor }}
        >
          <span itemProp="name" css={headerLinkItemStyles}>
            {children}
          </span>
        </StyledHeaderLink>
      )}
    </ClassNames>
  );
};

HeaderLink.propTypes = propTypes;

export default HeaderLink;
