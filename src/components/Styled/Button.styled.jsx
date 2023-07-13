import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: transparent;
  &.green {
    background: #5CD3A8;
  }

  &:hover {
    animation: jelly 0.5s;
  }

  &.totop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50px;
    font-size: 26px;
    width: 50px;
    height: 50px;
    padding: 0;

    & svg {
      position: relative;
      bottom: 1px;
      fill: #5CD3A8;
    }

    &::before,
    &::after {
      display: none;
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
  }
  @keyframes jelly {
    25% {
      transform: scale(0.9, 1.1);
    }

    50% {
      transform: scale(1.1, 0.9);
    }

    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;
