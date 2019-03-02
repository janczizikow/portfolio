import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const propTypes = {
  htmlFor: PropTypes.string.isRequired,
  block: PropTypes.bool,
  bold: PropTypes.bool,
  hidden: PropTypes.bool,
  invalid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  check: PropTypes.bool,
};

const Label = styled.label`
  display: ${p => {
    if (p.hidden) {
      return 'none';
    }

    if (p.block) {
      return 'block';
    }

    return 'inline-block';
  }};
  color: ${p =>
    (p.invalid && p.theme.colors.error) || p.theme.colors.textColor};
`;

Label.propTypes = propTypes;

export default Label;
