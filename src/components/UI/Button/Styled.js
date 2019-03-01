import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const loader = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const StyledButton = styled.button`
  margin: ${p => (p.space ? '0.75rem' : null)};
  padding: 0.75rem 2.25rem;
  position: relative;
  display: ${p => (p.block ? 'block' : 'inline-block')};
  border: 1px solid transparent;
  border-radius: ${p => (p.rounded ? '200px' : '0.25rem')};
  color: ${p => (p.loading ? 'transparent' : '#fff')};
  background-color: ${p => p.theme.colors[p.color]};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  opacity: ${p => p.disabled && 0.8};
  outline: 0;
  white-space: nowrap;
  user-select: none;
  transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out,
    border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};

  @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    &:not(:disabled) {
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 20px 38px rgba(0, 0, 0, 0.16);
      }
    }
  }

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
