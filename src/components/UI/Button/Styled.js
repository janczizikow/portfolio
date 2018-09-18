import styled, { keyframes } from 'react-emotion';

const loader = keyframes`
  0% {
    transform: translate(-50%, -50%) rotatate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  position: relative;
  display: ${p => (p.block ? 'block' : 'inline-block')};
  border: 1px solid transparent;
  border-radius: ${p => (p.rounded ? '200px' : '0.25rem')};
  color: ${p => (p.loading ? 'transparent' : p.theme.colors.white)};
  background-color: ${p => p.theme.colors[p.color]};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  opacity: ${p => p.disabled && 0.8};
  outline: 0;
  user-select: none;
  transition: color 0.15s ease-in-out, opacity 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    background-color 0.15s ease-in-out;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};

  &::after {
    content: '';
    position: absolute;
    display: ${p => (p.loading ? 'block' : 'none')};
    top: 50%;
    left: 50%;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    border-right: 2px solid rgba(255, 255, 255, 0.2);
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    border-left: 2px solid #fff;
    transform: translate(-50%, -50%) rotate(0deg);
    animation: ${loader} 1.1s infinite linear;
  }
`;

export default StyledButton;
