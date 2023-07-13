import styled from '@emotion/styled';

export const TweetBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background: linear-gradient(
    142deg,
    #5824d0e5 0%,
    #6841c3e4 69.1%,
    #6339c7ed 100%
  );
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
  padding: 20px 10px;
  border-radius: 10px;
`;

export const TweetText = styled.p`
color: #EBD8FF;
font-size: 14px;
font-weight: 500;
text-align: start;
`

export const TweetData = styled.p`
color: #EBD8FF;
font-size: 10px;
font-weight: 500;
text-align: right;
`