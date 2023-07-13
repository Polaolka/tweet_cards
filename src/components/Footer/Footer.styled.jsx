import styled from '@emotion/styled';

export const FooterStyled = styled.footer`
  /* position: fixed; */
  width: 100%;
  left: 0;
  bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 100px;
  margin-bottom: 10px;

  & ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    color: #373737;
    opacity: 0.8;
  }

  & li {
    font-size: 14px;
    display: flex;
    align-items: center;


    &:not(:last-child) {
      padding-right: 10px;
      border-right: 1px solid #373737;
    }
  }

  & .icon {
    margin-left: 8px;
    height: 20px;
    fill: #373737;
    width: 18px;
  }
`;
