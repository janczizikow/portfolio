// @flow
import React, { PureComponent, type Node } from 'react';
import posed, { PoseGroup } from 'react-pose';

type PageTransitionProps = {
  children: Node,
  location: {
    pathname: string,
  },
};

const timeout = 250;

class PageTransition extends PureComponent<PageTransitionProps> {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = posed.div({
      enter: { delay: timeout, delayChildren: timeout },
    });

    return (
      <PoseGroup animateOnMount>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

export default PageTransition;
