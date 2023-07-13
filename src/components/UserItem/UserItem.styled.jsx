import styled from '@emotion/styled';
import { Button } from 'components/Styled';
import logogoit from 'images/logogoit.png';
import picture_Ask_Quest from 'images/picture_Ask_Quest.png';
import { ReactComponent as Circle } from 'images/Ellipse_Stroke.svg';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  cursor: pointer;

  &:hover {
    animation: jelly 0.5s;
    color: #5CD3A8;
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

  &.active {
  }

`;

export const ItemStyled = styled.div`
position: relative;
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
border-radius: 20px;
padding-top: 284px;
overflow: hidden;
background: linear-gradient(142deg, #471CA9 0%, #5736A3 69.10%, #4B2A99 100%);
box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px rgba(0, 0, 0, 0.23);
width: 380px;
height: 460px;
`
export const NameStyled = styled.h3`
color: #EBD8FF;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
`
export const InfoStyled = styled.h3`
color: #EBD8FF;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-transform: uppercase;
&:hover {
    color: #5CD3A8;
  }
`
export const RectStyled = styled.div`
position: absolute;
top: 214px;
width: 100%;
height: 8px;
background: #EBD8FF;
box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #FBF8FF inset, 0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06), 0px -1.7184642553329468px 3.4369285106658936px 0px #AE7BE3 inset;
`
export const AvaThumbStyled = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 178px;
width: 80px;
height: 80px;
flex-shrink: 0;
border-radius: 100%;
overflow: hidden;
`
export const LogoThumbStyled = styled.div`
background: url(${logogoit}) no-repeat;
position: absolute;
top: 20px;
left: 20px;
width: 76px;
height: 22px;
`

export const ImgThumbStyled = styled.div`
position: absolute;
background: url(${picture_Ask_Quest}) no-repeat;
top: 28px;
left: 28px;
width: 308px;
height: 168px;
`

export const ImgStyled = styled.img`
position: absolute;
top: 5px;
border-radius: 100%;
width: 62px;
height: 62px;
`

export const InfoStyledFollowers = styled.h3`
color: #EBD8FF;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-transform: uppercase;
`

export const CircleStyled = styled(Circle)`
position: absolute;
width: 80px;
height: 80px;
`

export const FollowBtnStyled = styled(Button)`
width: 196px;
padding: 14px 28px;
gap: 6px;
border-radius: 10.311px;
background: #EBD8FF;
box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25);
color: #373737;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: uppercase;
`
