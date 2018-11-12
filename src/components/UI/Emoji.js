// @flow
import React from 'react';

type EmojiProps = {
  label?: string,
  children?: string,
};

const Emoji = (props: EmojiProps) => {
  const { label, children } = props;

  return (
    <span
      role="img"
      aria-label={label && label}
      aria-hidden={label ? 'false' : 'true'}
    >
      {children}
    </span>
  );
};

export default Emoji;
