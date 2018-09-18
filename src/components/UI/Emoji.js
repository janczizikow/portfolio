import React from 'react';

type Props = {
  label: string,
  children: string,
};

const Emoji = ({ label, children }: Props) => (
  <span
    role="img"
    aria-label={label && label}
    aria-hidden={label ? 'false' : 'true'}
  >
    {children}
  </span>
);

export default Emoji;
