import styled from '@emotion/styled';

const FormGroup = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: ${p => p.theme.space[4]}px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    transition: width 0.45s cubic-bezier(0.694, 0.048, 0.335, 1);
  }

  &::before {
    background-color: ${p => p.theme.colors.primary};
    z-index: 5;
    transition-delay: 0.1s;
  }
  &::after {
    background: ${p => p.theme.colors.error};
    z-index: 4;
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    &:hover,
    &:focus,
    &:active {
      &::before,
      &::after {
        width: ${p => (p.invalid ? 0 : '100%')};
      }
    }
  }
`;

export default FormGroup;
