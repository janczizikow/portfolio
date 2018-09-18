import styled from 'react-emotion';
// import PropTypes from 'prop-types';

// const propTypes = {
//   htmlFor: PropTypes.string.isRequired,
//   block: PropTypes.bool,
//   bold: PropTypes.bool,
//   hidden: PropTypes.bool,
//   invalid: PropTypes.bool,
//   className: PropTypes.string,
//   children: PropTypes.oneOfType([
//     PropTypes.node,
//     PropTypes.func,
//     PropTypes.string,
//   ]),
//   disabled: PropTypes.bool,
//   check: PropTypes.bool,
// };

/* eslint-disable */
const Label = styled.label`
  display: ${p => (p.hidden ? 'none' : p.block ? 'block' : 'inline-block')};
  color: ${p => p.invalid && p.theme.colors.error};
`;

export default Label;
