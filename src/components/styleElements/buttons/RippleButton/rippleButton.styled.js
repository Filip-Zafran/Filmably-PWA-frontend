import React from 'react';
import styled from 'styled-components';

export const RippleStyled = styled.div`
  position: relative;
  padding: 15px;
  display: inline-block;

  .rippleContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .rippleContainer > span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: var(--light-100);
    animation: ripple 850ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;
