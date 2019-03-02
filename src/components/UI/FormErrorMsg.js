import styled from '@emotion/styled';
import Text from './Text';

const defaultProps = {
  is: 'span',
};

const FormErrorMsg = styled(Text)`
  position: absolute;
  left: 0;
  bottom: -21px;
  font-size: 0.875rem;
  color: ${p => p.theme.colors.error};
`;

FormErrorMsg.defaultProps = defaultProps;

export default FormErrorMsg;
