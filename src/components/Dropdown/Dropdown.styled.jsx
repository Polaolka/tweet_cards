import styled from '@emotion/styled';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import { mediaSizes } from 'constants/media';

export const DropContainer = styled.div`
  position: relative;
  width: 140px;
  height: 40px;
  background-color: transparent;
  border: 1px solid #ebd8ff;
  border-radius: 12px;
  &.active {
    width: 320px;
    justify-content: start;

  }
  &:hover {
    border: 1px solid #5cd3a8;
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    &.active {
    width: 280px;
  }
    }
  /* 300px; */
`;

export const ArrowStyled = styled(Arrow)`
  position: absolute;
  right: 8px;
  top: 14px;
  width: 12px;
  height: 12px;
  transform: rotate(-90deg);
  &.active {
    transform: rotate(90deg);
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    width: 10px;
    height: 10px;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-top: -28px;
  justify-content: center;
  font-size: 12px;
  border: none;
  background-color: transparent;
  text-align: right;
  cursor: pointer;
  font-family: inherit;
  font-size: 100%;
  @media screen and (max-width: ${mediaSizes.tablet}) {
    gap: 8px;
  }
`;

export const DropBtn = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 8px;
  cursor: pointer;
  color: #ebd8ff;
  &.active {
    justify-content: start;
    padding: 8px 24px 8px 8px;
  }
`;

export const LiItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  color: #ebd8ff;
  background-color: transparent;
  &:hover {
    color: #5cd3a8;
  }
  @media screen and (max-width: ${mediaSizes.tablet}) {
    font-size: 12px;
  }
`;

export const OptionBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  padding: 0;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: blueviolet;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: greenyellow;
  }

  &.active {
    color: green;
  }
`;
