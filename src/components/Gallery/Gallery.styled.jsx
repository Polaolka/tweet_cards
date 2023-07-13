import styled from '@emotion/styled';
import { Button } from 'components/Styled';
import { container } from 'helpers';


export const BtnWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

export const FoodsListWrapper = styled.div`
${container}
  display: flex;
  width: 100%;
  margin: 10px auto 30px 10px;
  gap: 10px;
  flex-wrap: wrap;

`;

export const LoadMoreBtn = styled(Button)`
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