// @flow
import React from 'react';
import { Menu } from 'react-feather';
import { IconButton } from '../UI';
import presets from '../../utils/presets';

type Props = {
  onClick: () => mixed,
};

const HeaderToggle = (props: Props) => {
  const { onClick } = props;

  return (
    <IconButton
      type="button"
      aria-label="mobile menu"
      color="headingColor"
      css={{ [presets.lg]: { display: 'none' } }}
      onClick={onClick}
    >
      <Menu />
    </IconButton>
  );
};

export default HeaderToggle;
