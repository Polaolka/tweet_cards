import styled from '@emotion/styled';
import { Triangle } from 'react-loader-spinner';


import { ReactComponent as Done } from 'images/done_outline.svg';

export const LoaderStyled = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255 255 255 / 65%);
`;

export const LoaderContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
`;

export const StyledTriangle = styled(Triangle)`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;



export const DoneImg = styled(Done)`
  width: 43px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-55%, -18%);
  max-width: initial;
  & svg {
      fill: #5CD3A8;
    }
`;


